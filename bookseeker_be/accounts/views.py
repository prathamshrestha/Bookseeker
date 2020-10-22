from django.shortcuts import render
from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer,RegisterSerializer,LoginSerializer
from rest_framework import viewsets
from django.contrib.auth.models import  User

#Register View
class Registration_view(generics.GenericAPIView):
    serializer_class=RegisterSerializer

    def post(self,request, *args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user,
            context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })


# Login View
class Login_view(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })


class User_view(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  lookup_field='id'
  serializer_class = UserSerializer
  queryset=User.objects.all()

  def get_object(self):
    return self.request.user