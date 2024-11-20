from rest_framework import serializers

from market.models import Buyer, Seller, Dealer, Operator
from user.serializers import UserLeanSerializer


class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Buyer


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Seller


class SellerLeanSerializer(serializers.ModelSerializer):
    user = UserLeanSerializer(read_only=True)
    class Meta:
        fields = ["id", "user"]
        model = Seller


class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Dealer


class OperatorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Operator
