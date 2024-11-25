from django.contrib import admin

from messaging.models import Message


class MessageAdmin(admin.ModelAdmin):
    list_display = ('sender', 'receiver', 'created_at')
    search_fields = ('sender__username', 'receiver__username')

admin.site.register(Message)
