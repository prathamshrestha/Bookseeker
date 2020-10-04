# from django.shortcuts import render
# from rest_framework.generics import CreateAPIView,GenericAPIView
# from .serializers import RegisterSerializers,UserSerializer,LoginSerializer
# from .models import User
# from rest_framework.authtoken.models import Token
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.authtoken.views import ObtainAuthToken


# class SignUpView(CreateAPIView):
#     """
#     Sign Up functionality for creating object of
#     Custom User Model with CustomUserModelSearializers
#     """
#     serializer_class = RegisterSerializers
#     queryset = User.objects.all()
    


#     def post(self,request,*args,**kwargs):
#         serializer=self.get_serializer(data=request.data)
#         data={}
#         serializer.is_valid(raise_exception=True)
#         user=serializer.save()
#         data['response']='User is created.'
#         data['id']=user.id
#         data['email']=user.email
#         data['username']=user.username
#         token=Token.objects.get_or_create(user=user)
#         data['token']=token
#         return Response({'user':UserSerializer(user,context=self.get_serializer_context()).data},data)

# class CustomAuthToken(GenericAPIView):
#     serializer_class=LoginSerializer
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data,
#                                            context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({'user':UserSerializer(user,context=self.get_serializer_context()).data,'token': token.key, 'id': token.user.id})

# # class UserViewSet(ModelViewSet):
# #     http_method_names = ['get', 'put', 'patch', 'delete']
# #     serializer_class = RegisterSerializers
# #     queryset = User.objects.all()
# #     authentication_classes = [TokenAuthentication]
# #     permission_classes = [CustomIsAuthenticated]
# #     lookup_field = 'id'
# #     lookup_url_kwarg = 'id'

# #     def get_queryset(self):
# #         super(UserViewSet, self).get_queryset()
# #         print(self.request.user.id)
# #         return self.queryset.filter(id=self.request.user.id)

from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)