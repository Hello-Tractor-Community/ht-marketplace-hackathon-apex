from django.contrib import admin

from feedback.models import Review


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('tractor', 'seller', 'buyer', 'rating', 'comment', 'created_at', 'updated_at')
    list_filter = ('rating', 'created_at', 'updated_at')
    search_fields = ('tractor__name', 'seller__name', 'buyer__name', 'comment')
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(Review, ReviewAdmin)
