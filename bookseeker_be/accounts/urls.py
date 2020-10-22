from django.urls import path,include

from .views import Registration_view,Login_view,User_view
from knox import views as knox_view

urlpatterns=[
    path('',include('knox.urls')),
    path('register/',Registration_view.as_view()),
    path('signin/',Login_view.as_view()),
    path('user/<int:id>/',User_view.as_view()),
    path('logout/',knox_view.LogoutView.as_view(),name='knox-logout')
]