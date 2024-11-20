from rest_framework import serializers

from feedback.models import Review


class TractorReviewSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ["seller"]
        model = Review

    # validate to make sure the tractor is provided
    def validate(self, data):
        # Only validate `tractor` presence for create operations
        if not self.instance and not data.get("tractor"):
            raise serializers.ValidationError("tractor is required")
        return data

class SellerReviewSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ["tractor"]
        model = Review

    # validate to make sure the seller is provided
    def validate(self, data):
        # Only validate `seller` presence for create operations
        if not self.instance and not data.get("seller"):
            raise serializers.ValidationError("seller is required")
        return data
