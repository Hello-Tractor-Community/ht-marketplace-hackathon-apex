from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from messaging.models import Message
from messaging.serializers import MessageSerializer
from django.http import Http404


class MessageList(APIView):
    def get(self, request, format=None):
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

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
    

class UserMessageList(APIView):
    def get(self, request, user_id, format=None):
        messages = Message.objects.filter(sender_id=user_id)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, user_id, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(sender_id=user_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserMessageDetail(APIView):
    def get(self, request, user_id, pk, format=None):
        message = get_object_or_404(Message, pk=pk, sender_id=user_id)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def put(self, request, user_id, pk, format=None):
        message = get_object_or_404(Message, pk=pk, sender_id=user_id)
        serializer = MessageSerializer(message, data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, user_id, pk, format=None):
        message = get_object_or_404(Message, pk=pk, sender_id=user_id)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
