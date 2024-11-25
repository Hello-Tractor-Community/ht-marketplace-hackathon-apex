from django.contrib import admin

from market.models import Seller, Dealer, Operator, Buyer


admin.site.register(Seller)
admin.site.register(Dealer)
admin.site.register(Operator)
admin.site.register(Buyer)
