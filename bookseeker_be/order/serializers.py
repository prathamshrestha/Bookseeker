from rest_framework import serializers
from .models import Order_model

class order_serializers(serializers.ModelSerializer):
    class Meta:
        model=Order_model
        fields=['id','book','book_id','name','email','contact_number','order_status','quantity']