from rest_framework import serializers

from user.models import User, Buyer, Seller, Dealer, Operator


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = User


class UserLeanSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["id", "email"]
        model = User


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
