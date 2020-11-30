from django.shortcuts import render
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import viewsets,permissions
from .models import Comment_Model
from .serializers import Comment_Serializers


class comment_list_view(ListAPIView):
    serializer_class=Comment_Serializers
    permission_classes=[permissions.AllowAny]
    lookup_field='book_id'
    def get_queryset(self):
        book_id=self.kwargs['book_id']
        return Comment_Model.objects.filter(book_id=book_id)


class comment_delete_view(RetrieveUpdateDestroyAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=Comment_Serializers
    lookup_field='id'
    queryset=Comment_Model.objects.all()
    

class comment_view(CreateAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class=Comment_Serializers
    queryset=Comment_Model.objects.all()