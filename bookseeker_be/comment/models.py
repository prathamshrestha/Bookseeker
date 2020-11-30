from django.db import models

from django_timestamps.softDeletion import SoftDeletionModel
from django_timestamps.timestamps import TimestampsModel
from accounts.models import User
from django.conf import settings
from sell_books.models import booksell_model

User=settings.AUTH_USER_MODEL



class Comment_Model(SoftDeletionModel, TimestampsModel):
    book=models.ForeignKey(booksell_model,on_delete=models.CASCADE)
    name=models.CharField(max_length=255)
    comment=models.CharField(max_length=500)
