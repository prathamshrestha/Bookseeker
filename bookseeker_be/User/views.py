from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializers,UserSerializer
from .models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication

class SignUpView(CreateAPIView):
    """
    Sign Up functionality for creating object of
    Custom User Model with CustomUserModelSearializers
    """
    serializer_class = RegisterSerializers
    queryset = User.objects.all()
    


    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        data={}
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        data['response']='User is created.'
        data['id']=user.id
        data['email']=user.email
        data['username']=user.username
        token=Token.objects.get_or_create(user=user)
        data['token']=token
        return Response(data)

# class UserViewSet(ModelViewSet):
#     http_method_names = ['get', 'put', 'patch', 'delete']
#     serializer_class = RegisterSerializers
#     queryset = User.objects.all()
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [CustomIsAuthenticated]
#     lookup_field = 'id'
#     lookup_url_kwarg = 'id'

#     def get_queryset(self):
#         super(UserViewSet, self).get_queryset()
#         print(self.request.user.id)
#         return self.queryset.filter(id=self.request.user.id)