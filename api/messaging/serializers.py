from rest_framework import serializers

from messaging.models import Message


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


class ChatSerializer(serializers.Serializer):
    user_ids = serializers.ListField(child=serializers.UUIDField())

    def validate_user_ids(self, value):
        if len(value) != 2:
            raise serializers.ValidationError(
                "Two user_ids must be provided to get a chat"
            )
        return value
