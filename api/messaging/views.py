from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from messaging.models import Message
from messaging.serializers import MessageSerializer, ChatSerializer


class MessageList(APIView):
    def get(self, request, format=None):
        page = int(request.GET.get("page", 1))
        per_page = int(request.GET.get("per_page", 10))
        offset = (page - 1) * per_page
        limit = per_page + offset

        serializer = ChatSerializer(
            data={"user_ids": request.GET.getlist("user_id")}
        )
        serializer.is_valid(raise_exception=True)
        user_ids = serializer.validated_data["user_ids"]
        
        chat_filter = Q(
            Q(sender=user_ids[0], receiver=user_ids[1]) 
            | Q(receiver=user_ids[1], sender=user_ids[0])
        )

        messages = Message.objects.filter(chat_filter).order_by("-created_at")
        count = messages.count()
        serializer = MessageSerializer(messages, many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count": count,
            "results": serializer.data[offset:limit]
        }
        return Response(response, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class MessageDetail(APIView):
    def get(self, request, pk, format=None):
        message = get_object_or_404(Message, pk=pk)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        message = get_object_or_404(Message, pk=pk)
        serializer = MessageSerializer(message, data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def delete(self, request, pk, format=None):
        message = get_object_or_404(Message, pk=pk)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
