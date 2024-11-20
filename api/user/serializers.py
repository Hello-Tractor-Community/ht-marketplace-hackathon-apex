from rest_framework import serializers

from user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = User


class UserLeanSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["id", "email"]
        model = User
