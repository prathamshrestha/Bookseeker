from django.db import models
# from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone
from django_timestamps.softDeletion import SoftDeletionModel
from django_timestamps.timestamps import TimestampsModel

User=settings.AUTH_USER_MODEL

def upload_path(instance, filename):
    return '/'.join(['bookpic',str(instance.bookname), filename])

class booksell_model( SoftDeletionModel,TimestampsModel):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    bookname=models.CharField(max_length=50,blank=True)
    bookpicture=models.ImageField(blank=True, upload_to=upload_path)
    author=models.CharField(max_length=100,blank=True)
    genre=models.CharField(max_length=50,blank=True)
    publish_year=models.DateField(blank=True,default=timezone.now)
    hardcopy=models.BooleanField(default=True)
    price=models.IntegerField(blank=True,null=True)
    age = models.IntegerField(blank=True,null=True)
    description=models.CharField(max_length=500,blank=True)
    status=models.TextField(blank=True,null=True)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
   


    def __str__(self):
        return self.bookname

