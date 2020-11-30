from rest_framework import serializers
from .models import Profile_Model

class Profile_Serializers(serializers.ModelSerializer):
    class Meta:
        model=Profile_Model
        fields=['id','user','user_id','fav_book','bio','is_student','contact_info','location']