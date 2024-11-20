from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from market.models import Seller
from product.models import Tractor, Enquiry
from product.serializers import (
    TractorSerializer, 
    TractorLeanSerializer, 
    EnquirySerializer,
    MessageSerializer,
)
from django.db.models import Q



class TractorListView(APIView):
    def get(self, request):
        # Extract pagination information. 
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        limit = int(per_page)
        offset = (int(page) - 1) * limit

        tractors = Tractor.objects.all()

        # Filter by price range.
        price_from = request.GET.get('price_from')
        price_to = request.GET.get('price_to')
        if price_from and price_to:
            tractors = tractors.filter(price__range=(price_from, price_to))
        elif price_from:
            tractors = tractors.filter(price__gte=price_from)
        elif price_to:
            tractors = tractors.filter(price__lte=price_to)

        # Filter by usage hours.
        hours_from = request.GET.get('hours_from')
        hours_to = request.GET.get('hours_to')
        if hours_from and hours_to:
            tractors = tractors.filter(hours__range=(hours_from, hours_to))
        elif hours_from:
            tractors = tractors.filter(hours__gte=hours_from)
        elif hours_to:
            tractors = tractors.filter(hours__lte=hours_to)

        # Filter by brand.
        if 'brand' in request.GET:
            tractors = tractors.filter(request.GET['brand'])

        # Filter by make.
        if 'make' in request.GET:
            tractors = tractors.filter(make=request.GET['make'])

        # Filter by model.
        if 'model' in request.GET:
            tractors = tractors.filter(model=request.GET['model'])

        # Filter by brand.
        if 'brand' in request.GET:
            tractors = tractors.filter(brand=request.GET['brand'])

        # Filter by location.
        if 'location' in request.GET:
            tractors = tractors.filter(location=request.GET['location'])

        # Perform search on price, make, model and location fields.
        if 'search' in request.GET:
            tractors = tractors.filter(
                Q(price__icontains=request.GET['search']) |
                Q(make__icontains=request.GET['search']) |
                Q(model__icontains=request.GET['search']) |
                Q(location__icontains=request.GET['search']) |
                Q(brand__icontains=request.GET['search'])
            )

        count = tractors.count()
        serializer = TractorLeanSerializer(tractors[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count":count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = TractorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TractorDetailView(APIView):
    def get(self, request, pk):
        tractor = get_object_or_404(Tractor, pk=pk)
        serializer = TractorSerializer(tractor)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        tractor = get_object_or_404(Tractor, pk=pk)
        serializer = TractorSerializer(
            tractor, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        tractor = get_object_or_404(Tractor, pk=pk)
        tractor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SellerTracktorListView(APIView):
    def get(self, request, pk):
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        offset = (int(page) - 1) * int(per_page)
        limit = offset + int(per_page)
        seller = get_object_or_404(Seller, pk=pk)
        tractors = seller.tractor_set.all()
        count = tractors.count()
        serializer = TractorSerializer(tractors[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count": count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)
    
    def post(self, request, pk):
        get_object_or_404(Seller, pk=pk)
        data = request.data.copy()
        data['seller'] = pk
        serializer = TractorSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SellerTracktorDetailView(APIView):
    def get(self, request, pk, tractor_pk):
        tractor = get_object_or_404(Tractor, pk=tractor_pk)
        serializer = TractorSerializer(tractor)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, tractor_pk):
        tractor = get_object_or_404(Tractor, pk=tractor_pk)
        serializer = TractorSerializer(
            tractor, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, tractor_pk):
        tractor = get_object_or_404(Tractor, pk=tractor_pk)
        tractor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class EnquiryListView(APIView):
    def get(self, request):
        enquiry = Enquiry.objects.all()
        serializer = EnquirySerializer(enquiry, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = EnquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EnquiryDetailView(APIView):
    def get(self, request, pk):
        try:
            enquiry = Enquiry.objects.get(pk=pk)
        except Enquiry.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EnquirySerializer(enquiry)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        try:
            enquiry = Enquiry.objects.get(pk=pk)
        except Enquiry.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EnquirySerializer(enquiry, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            enquiry = Enquiry.objects.get(pk=pk)
        except Enquiry.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        enquiry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class EnquiryMessageListView(APIView):
    def get(self, request, pk):
        # Extract pagination parameters.
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        limit = int(per_page)
        offset = (int(page) - 1) * limit
        enquiry = get_object_or_404(Enquiry, pk=pk)
        
        messages = enquiry.messages.all()
        count = messages.count()
        serializer = MessageSerializer(messages[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count":count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)

    def post(self, request, pk):
        enquiry = get_object_or_404(Enquiry, pk=pk)
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            message = serializer.save()
            enquiry.messages.add(message)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    
class EnquiryMessageDetailView(APIView):
    def get(self, request, pk, message_pk):
        enquiry  = get_object_or_404(Enquiry, pk=pk)
        message = get_object_or_404(enquiry.messages, pk=message_pk)
        serializer = MessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, message_pk):
        enquiry = get_object_or_404(Enquiry, pk=pk)
        message = get_object_or_404(enquiry.messages, pk=message_pk)
        serializer = MessageSerializer(
            message, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, message_pk):
        enquiry = get_object_or_404(Enquiry, pk=pk)
        message = get_object_or_404(enquiry.messages, pk=message_pk)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
