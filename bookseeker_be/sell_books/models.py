from django.db import models
from django.contrib.auth.models import User


def upload_path(instance, filename):
    return '/'.join(['bookpic',str(instance.bookname), filename])

class booksell_model(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    bookname=models.CharField(max_length=50,blank=True)
    bookpicture=models.ImageField(blank=True, upload_to=upload_path)
    age = models.IntegerField(blank=True)
    description=models.CharField(max_length=500,blank=True)
    status=models.TextField(blank=True)


    def __str__(self):
        return self.bookname

