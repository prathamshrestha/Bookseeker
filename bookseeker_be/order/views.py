from django.shortcuts import render
from django.shortcuts import render
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import viewsets,permissions
from .models import Order_model
from .serializers import order_serializers


class order_list_view(ListAPIView):
    serializer_class=order_serializers
    permission_classes=[permissions.AllowAny]
    lookup_field='book_id'
    def get_queryset(self):
        book_id=self.kwargs['book_id']
        return Order_model.objects.filter(book_id=book_id)

class order_delete_view(RetrieveUpdateDestroyAPIView):
    permission_classes=[permissions.IsAuthenticated]
    lookup_field = 'id'
    serializer_class=order_serializers
    queryset=Order_model.objects.all()
    

class order_view(CreateAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class=order_serializers
    queryset=Order_model.objects.all()