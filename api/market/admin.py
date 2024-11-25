from django.contrib import admin

from market.models import Seller, Dealer, Operator, Buyer


class SellerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at')
    search_fields = ('user__email', 'user__name')
    list_filter = ('created_at', 'updated_at')
    ordering = ('-created_at',)


class DealerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at')
    search_fields = ('user__email', 'user__name')
    list_filter = ('created_at', 'updated_at')
    ordering = ('-created_at',)


class OperatorAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at')
    search_fields = ('user__email', 'user__name')
    list_filter = ('created_at', 'updated_at')
    ordering = ('-created_at',)


class BuyerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at')
    search_fields = ('user__email', 'user__name')
    list_filter = ('created_at', 'updated_at')
    ordering = ('-created_at',)


admin.site.register(Seller, SellerAdmin)
admin.site.register(Dealer, DealerAdmin)
admin.site.register(Operator, OperatorAdmin)
admin.site.register(Buyer,  BuyerAdmin)
