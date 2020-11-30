from django.urls import path
from .views import order_delete_view,order_list_view,order_view
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers






urlpatterns=[
    
    path('orderlist/<int:book_id>',order_list_view.as_view()),
    path('order/',order_view.as_view()),
    path('book_update_delete/<int:id>/',order_delete_view.as_view()),

]
