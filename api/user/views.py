from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from product.serializers import SellerReviewSerializer
from user.models import User, Buyer, Seller, Dealer, Operator
from user.serializers import (
    UserSerializer, 
    BuyerSerializer, 
    SellerSerializer, 
    DealerSerializer,
    OperatorSerializer,
)

from utils import AuthenticatedAPIView

class UserList(APIView):
    def get(self, request):
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        offset = (int(page) - 1) * int(per_page)
        limit = int(per_page) + offset
        
        users = User.objects.all()
        count = users.count()
        serializer = UserSerializer(users[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count": count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserDetail(APIView):
    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

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


class SellerReviewList(APIView):
    def get(self, request, pk):
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        offset = (int(page) - 1) * int(per_page)
        limit = int(per_page) + offset
        seller = get_object_or_404(Seller, pk=pk)
        reviews = seller.review_set.all()
        count = reviews.count()
        serializer = SellerReviewSerializer(reviews[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count":count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)
    
    def post(self, request, pk):
        get_object_or_404(Seller, pk=pk)
        data = request.data.copy()
        data["seller"] = pk
        serializer = SellerReviewSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()            
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SellerReviewDetail(APIView):
    def get(self, request, pk, review_pk):
        seller = get_object_or_404(Seller, pk=pk)
        review = seller.review_set.get(pk=review_pk)
        serializer = SellerReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, review_pk):
        seller = get_object_or_404(Seller, pk=pk)
        review = seller.review_set.get(pk=review_pk)
        serializer = SellerReviewSerializer(
            review, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, review_pk):
        seller = get_object_or_404(Seller, pk=pk)
        review = seller.review_set.get(pk=review_pk)
        review.delete()
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
