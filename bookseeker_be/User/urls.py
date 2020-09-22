from django.urls import path
from .views import SignUpView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns=[
    path('register/',SignUpView.as_view()),
    path('login/',obtain_auth_token)

]