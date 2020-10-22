from django.urls import path,include
from .views import Profilecreate_view,Profileupdate_view,ProfileRetrive_view
from rest_framework import routers



urlpatterns = [
    path('profile/',Profilecreate_view.as_view()),
    path('updateprofile/<int:id>/',Profileupdate_view.as_view()),
    path('retrieveprofile/<int:id>/',ProfileRetrive_view.as_view())


] 