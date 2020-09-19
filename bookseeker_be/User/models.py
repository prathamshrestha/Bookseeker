from django.db import models
from  django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    middle_name      =models.CharField(verbose_name='middle name',max_length=100)
    contact_address =models.CharField(max_length=150)
    contact_number  =models.CharField(max_length=10, blank=True)
    
    
    is_collegestudent= models.BooleanField(default=False)

    groups=None
    user_permissions=None
