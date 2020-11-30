from django.db import models

from django_timestamps.softDeletion import SoftDeletionModel
from django_timestamps.timestamps import TimestampsModel
from phonenumber_field.modelfields import PhoneNumberField
from sell_books.models import booksell_model

class Order_model(SoftDeletionModel,TimestampsModel):
    book=models.ForeignKey(booksell_model,on_delete=models.CASCADE)
    email=models.EmailField()
    name=models.CharField(max_length=255)
    contact_number=PhoneNumberField(default='+977')
    order_status=models.CharField(max_length=100,default='pending')
    quantity=models.IntegerField()

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
