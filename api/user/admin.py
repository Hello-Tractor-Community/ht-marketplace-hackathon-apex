from django.contrib import admin

from user.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'firebase_id', 'name', 'email', 'phone_number', 'address', 'created_at', 'updated_at')
    search_fields = ('firebase_id', 'name', 'email', 'phone_number', 'address')
    list_filter = ('created_at', 'updated_at')
    ordering = ('-created_at',)


admin.site.register(User, UserAdmin)
