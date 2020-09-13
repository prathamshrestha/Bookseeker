from django.db import models
from  django.contrib.auth.models import AbstractBaseUser,BaseUserManager

class account(BaseUserManager):
    pass

class CreateUsers(AbstractBaseUser):
    email           =models.EmailField(verbose_name='email',max_length=60,unique=True)
    username        =models.CharField(max_length=60,unique=True)
    date_joined     =models.DateField(verbose_name='date_joined',auto_now_add=True)
    last_login      =models.DateField(verbose_name='last_login',auto_now=True)
    is_admin        =models.BooleanField(default=False)
    is_superuser    =models.BooleanField(default=False)
    is_staff        =models.BooleanField(default=False)
    is_active       =models.BooleanField(default=False)
    first_name      =models.CharField(verbose_name='first_name',max_length=30)
    last_name       =models.CharField(verbose_name='last_name',max_length=30)
    contact_info    =models.CharField(verbose_name='contact_info',max_length=30)
    location        =models.CharField(verbose_name='location',max_length=200)
    dob             =models.DateField(verbose_name='dob')
    bio             =models.CharField(verbose_name='bio',max_length=200)

    USERNAME_FIELD= 'username'
    REQUIRED_FIELDS=['username','email','first_name','last_name','dob','location','contact_info']
