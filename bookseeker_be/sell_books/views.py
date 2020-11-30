from django.shortcuts import render
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import viewsets,permissions
from .models import booksell_model
from .serializers import booksell_serializers
from rest_framework.filters import SearchFilter, OrderingFilter

# class booksell_view(CreateAPIView):
#     serializer_class=booksell_serializers
   


class booksell_list_view(ListAPIView):
    serializer_class=booksell_serializers
    permission_classes=[permissions.AllowAny]
    queryset=booksell_model.objects.all()
    filter_backends=(SearchFilter,OrderingFilter)
    search_fields=('bookname','author','genre')

class user_booklist_view(ListAPIView):
    serializer_class=booksell_serializers
    permission_classes=[permissions.IsAuthenticated]

    
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return booksell_model.objects.filter(user=user)

class booksell_delete_view(RetrieveUpdateDestroyAPIView):
    permission_classes=[permissions.IsAuthenticated]
    lookup_field = 'id'
    serializer_class=booksell_serializers
    queryset=booksell_model.objects.all()

class booksell_view(CreateAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=booksell_serializers
    queryset=booksell_model.objects.all()