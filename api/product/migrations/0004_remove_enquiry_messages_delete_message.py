# Generated by Django 5.1.3 on 2024-11-22 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_tractor_condition_tractor_drive_type_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='enquiry',
            name='messages',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
    ]