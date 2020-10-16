from django.db import models
from django.contrib.auth.models import User


def upload_path(instance, filename):
    return '/'.join(['bookpic',str(instance.bookname), filename])

class booksell_model(models.Model):
    bookname=models.CharField(max_length=50)
    bookpicture=models.ImageField(blank=True, upload_to=upload_path)
    age = models.IntegerField(blank=True)
    description=models.CharField(max_length=500)
    status=models.TextField(blank=True)
    owner=models.ForeignKey(User, related_name="sell_books", on_delete=models.CASCADE,null=True)


    def __str__(self):
        return self.bookname