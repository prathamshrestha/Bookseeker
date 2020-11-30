from rest_framework import serializers
from .models import Comment_Model

class Comment_Serializers(serializers.ModelSerializer):
    class Meta:
        model=Comment_Model
        fields=['id','book','book_id','name','comment']