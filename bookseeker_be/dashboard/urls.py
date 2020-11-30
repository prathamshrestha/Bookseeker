from django.urls import path,include
from .views import Profilecreate_view,Profile_update_delete_view,ProfileRetrive_view
from rest_framework import routers



urlpatterns = [
    path('profile/',Profilecreate_view.as_view()),
    path('update_delete_profile/<int:id>/',Profile_update_delete_view.as_view()),
    path('retrieveprofile/<int:user_id>/',ProfileRetrive_view.as_view())


] 