import uuid

from django.db import models

from market.models import Seller, Buyer
from product.models import Tractor


class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tractor = models.ForeignKey(Tractor, on_delete=models.CASCADE, blank=True, null=True)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, blank=True, null=True)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.comment[:50] + '...' if len(self.comment) > 50 else self.comment