import uuid
from django.db import models

from market.models import Buyer, Seller


class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.URLField(max_length=200)
    alt = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.url
    

class Tractor(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    brand = models.CharField(max_length=50, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    name = models.CharField(max_length=50)
    description = models.TextField()
    images = models.ManyToManyField(Image)
    history = models.TextField(null=True, blank=True)
    hours = models.PositiveIntegerField(default=0)
    location = models.CharField(max_length=50)
    is_approved = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    stock = models.PositiveIntegerField(default=0)
    specifications = models.JSONField(null=True, blank=True)
    features = models.JSONField(null=True, blank=True)
    condition = models.CharField(max_length=50, null=True, blank=True)
    milleage = models.PositiveIntegerField(default=0, null=True, blank=True)
    vin = models.CharField(max_length=50, null=True, blank=True)
    transmission = models.CharField(max_length=50, null=True, blank=True)
    drive_type = models.CharField(max_length=50, null=True, blank=True)
    fuel_type = models.CharField(max_length=50, null=True, blank=True)
    engine_size = models.CharField(max_length=50, null=True, blank=True)
    offer_type = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Enquiry(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tractors = models.ManyToManyField(Tractor)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    is_sold = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OrderItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tractor = models.ForeignKey(Tractor, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    order_items = models.ManyToManyField(OrderItem)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
