from rest_framework import serializers
from .models import booksell_model

class booksell_serializers(serializers.ModelSerializer):
    class Meta:
        model=booksell_model
        fields=['id','name','bookpicture','description','age','description','status']