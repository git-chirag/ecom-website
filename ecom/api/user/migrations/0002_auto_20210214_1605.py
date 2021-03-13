# Generated by Django 3.0.8 on 2021-02-14 10:35

from django.db import migrations, models
import django.utils.timezone
import phone_field.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default=django.utils.timezone.now, max_length=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='customuser',
            name='phone',
            field=phone_field.models.PhoneField(blank=True, default=django.utils.timezone.now, help_text='Contact phone number', max_length=31),
            preserve_default=False,
        ),
    ]