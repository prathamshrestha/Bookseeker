from rest_framework import serializers
from .models import booksell_model

class booksell_serializers(serializers.ModelSerializer):
    class Meta:
        model=booksell_model
        fields=['id','user','bookname','author','genre','publish_year','hardcopy','price','bookpicture','description','age','description','status']