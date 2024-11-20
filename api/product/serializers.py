from rest_framework import serializers
from product.models import Tractor, Image, Enquiry, Message
from market.serializers import SellerLeanSerializer


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Image

class ImageLeanSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["url", "alt"]
        model = Image


class TractorSerializer(serializers.ModelSerializer):

    images = ImageSerializer(many=True)

    def create(self, validated_data):
        images = validated_data.pop('images')
        tractor = Tractor.objects.create(**validated_data)
        for image in images:
            img = Image.objects.create(**image)
            tractor.images.add(img)
        return tractor

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['images'] = ImageLeanSerializer(instance.images.all(), many=True).data
        ret['seller'] = SellerLeanSerializer(instance.seller).data
        return ret

    class Meta:
        fields = "__all__"
        model = Tractor

class TractorLeanSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["id", "name", "price", "images"]
        model = Tractor

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['images'] = ImageLeanSerializer([instance.images.last()], many=True).data
        return ret

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Enquiry

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Message
        
