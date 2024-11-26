from rest_framework import serializers

from market.models import Buyer, Seller, Dealer, Operator
from user.serializers import UserLeanSerializer, UserSerializer


class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Buyer
    
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['user'] = UserSerializer(instance.user).data
        return ret


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Seller

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['user'] = UserSerializer(instance.user).data
        return ret


class SellerLeanSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["id", "user"]
        model = Seller

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['user'] = UserSerializer(instance.user).data
        return ret


class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Dealer

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['user'] = UserSerializer(instance.user).data
        return ret

class OperatorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Operator

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['user'] = UserSerializer(instance.user).data
        return ret
