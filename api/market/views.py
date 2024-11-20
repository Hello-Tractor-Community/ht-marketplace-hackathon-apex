from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from market.models import Buyer, Seller, Dealer, Operator
from market.serializers import (
    BuyerSerializer,
    SellerSerializer,
    DealerSerializer,
    OperatorSerializer,
)


class BuyerList(APIView):
    def get(self, request):
        buyer_profiles = Buyer.objects.all()
        serializer = BuyerSerializer(buyer_profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BuyerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class BuyerDetail(APIView):
    def get(self, request, pk):
        buyer_profile = get_object_or_404(Buyer, pk=pk)
        serializer = BuyerSerializer(buyer_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        buyer_profile = get_object_or_404(Buyer, pk=pk)
        serializer = BuyerSerializer(buyer_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        buyer_profile = get_object_or_404(Buyer, pk=pk)
        buyer_profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class SellerList(APIView):
    def get(self, request):
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        offset = (int(page) - 1) * int(per_page)
        limit = int(per_page) + offset
        sellers = Seller.objects.all()
        count = sellers.count()
        serializer = SellerSerializer(sellers[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count": count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = SellerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class SellerDetail(APIView):
    def get(self, request, pk):
        seller_profile = get_object_or_404(Seller, pk=pk)
        serializer = SellerSerializer(seller_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        seller_profile = get_object_or_404(Seller, pk=pk)
        serializer = SellerSerializer(seller_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        seller_profile = get_object_or_404(Seller, pk=pk)
        seller_profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





class DealerList(APIView):
    def get(self, request):
        dealer_profiles = Dealer.objects.all()
        serializer = DealerSerializer(dealer_profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DealerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DealerDetail(APIView):
    def get(self, request, pk):
        dealer_profile = get_object_or_404(Dealer, pk=pk)
        serializer = DealerSerializer(dealer_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        dealer_profile = get_object_or_404(Dealer, pk=pk)
        serializer = DealerSerializer(dealer_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        dealer_profile = get_object_or_404(Dealer, pk=pk)
        dealer_profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class OperatorList(APIView):
    def get(self, request):
        operator_profiles = Operator.objects.all()
        serializer = OperatorSerializer(operator_profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = OperatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class OperatorDetail(APIView):
    def get(self, request, pk):
        operator_profile =  get_object_or_404(Operator, pk=pk)
        serializer = OperatorSerializer(operator_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        operator_profile =  get_object_or_404(Operator, pk=pk)
        serializer = OperatorSerializer(operator_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        operator_profile =  get_object_or_404(Operator, pk=pk)
        operator_profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
