from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializers
from .models import User

class SignUpView(CreateAPIView):
    """
    Sign Up functionality for creating object of
    Custom User Model with CustomUserModelSearializers
    """
    serializer_class = RegisterSerializers
    queryset = User.objects.all()