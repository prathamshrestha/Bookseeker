from django.urls import path
from .views import UserList,current_user
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns=[
    path('current_user/', current_user),
    path('users/', UserList.as_view())

]