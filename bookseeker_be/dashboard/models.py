from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    fav_book=models.CharField(max_length=100,blank=True)
    bio=models.CharField(max_length=200,default=True)
    is_student=models.BooleanField(default=False)
    contact_info=models.CharField(max_length=15,blank=True)
    location=models.CharField(max_length=100,blank=True)
