from django.shortcuts import render
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from .models import booksell_model
from .serializers import booksell_serializers

class booksell_view(CreateAPIView):
    serializer_class=booksell_serializers


class booksell_list_view(ListAPIView):
    
    serializer_class=booksell_serializers
    queryset=booksell_model.objects.all()

class booksell_delete_view(RetrieveUpdateDestroyAPIView):
    lookup_field='pk'
    serializer_class=booksell_serializers
    queryset=booksell_model.objects.all()