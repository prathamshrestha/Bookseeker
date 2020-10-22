from django.db import models
from django.contrib.auth.models import User

class Profile_Model(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    fav_book=models.CharField(max_length=100,blank=True)
    bio=models.CharField(max_length=200,blank=True)
    is_student=models.BooleanField(default=False)
    contact_info=models.CharField(max_length=15,blank=True)
    location=models.CharField(max_length=100,blank=True)
    

    def __str__(self):
        return self.fav_book
    
    # class  Meta:
    #     abstract=True


