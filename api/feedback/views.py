from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from market.models import Seller
from product.models import Tractor
from feedback.serializers import (
    SellerReviewSerializer,
    TractorReviewSerializer,
)


class TractorReviewList(APIView):
    def get(self, request, pk):
        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)
        offset = (int(page) - 1) * int(per_page)
        limit = int(per_page) + offset
        tractor = get_object_or_404(Tractor, pk=pk)
        reviews = tractor.review_set.all()
        count = reviews.count()
        serializer = TractorReviewSerializer(reviews[offset:limit], many=True)
        response = {
            "page": page,
            "per_page": per_page,
            "count":count,
            "results": serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)
    
    def post(self, request, pk):
        get_object_or_404(Tractor, pk=pk)
        data = request.data.copy()
        data["tractor"] = pk
        serializer = TractorReviewSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()            
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

class TractorReviewDetail(APIView):
    def get(self, request, pk, review_pk):
        tractor = get_object_or_404(Tractor, pk=pk)
        review = tractor.review_set.get(pk=review_pk)
        serializer = TractorReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, review_pk):
        tractor = get_object_or_404(Tractor, pk=pk)
        review = tractor.review_set.get(pk=review_pk)
        serializer = TractorReviewSerializer(
            review, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, review_pk):
        tractor = get_object_or_404(Tractor, pk=pk)
        review = tractor.review_set.get(pk=review_pk)
        review.delete()
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
