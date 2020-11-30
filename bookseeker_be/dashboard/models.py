from django.db import models
from django_timestamps.softDeletion import SoftDeletionModel
from django_timestamps.timestamps import TimestampsModel
from django.conf import settings
User=settings.AUTH_USER_MODEL



class Profile_Model(SoftDeletionModel, TimestampsModel):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    fav_book=models.CharField(max_length=100,blank=True)
    bio=models.CharField(max_length=200,blank=True)
    is_student=models.BooleanField(default=False)
    contact_info=models.CharField(max_length=15,blank=True)
    location=models.CharField(max_length=100,blank=True)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.fav_book
    
    # class  Meta:
    #     abstract=True


