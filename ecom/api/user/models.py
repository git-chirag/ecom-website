from django.db import models
from django.contrib.auth.models import AbstractUser
from phone_field import PhoneField

# Create your models here.


class CustomUser(AbstractUser):
    name = models.CharField(max_length=50, default='Anonymous')
    email = models.EmailField(max_length=254, unique=True)
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    phone = PhoneField(max_length=31, blank=True,
                       help_text='Contact phone number')
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(
        max_length=1, default="M", choices=GENDER_CHOICES)
    session_token = models.CharField(max_length=10, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
