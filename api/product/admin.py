from django.contrib import admin

from product.models import Image, Tractor, Enquiry


class ImageAdmin(admin.ModelAdmin):
    list_display = ('url', 'alt')


class TractorAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'model', 'price', 'is_approved', 'is_active', 'stock')
    list_filter = ('is_approved', 'is_active', 'brand', 'model')
    search_fields = ('name', 'brand', 'model')
    filter_horizontal = ('images',)


class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('buyer', 'is_sold', 'created_at', 'updated_at')
    list_filter = ('is_sold', 'created_at', 'updated_at')
    search_fields = ('buyer__email', 'buyer__name')
    filter_horizontal = ('tractors',)


admin.site.register(Tractor, TractorAdmin)
admin.site.register(Image, ImageAdmin)
admin.site.register(Enquiry, EnquiryAdmin)
