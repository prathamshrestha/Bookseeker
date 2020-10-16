from django.shortcuts import render
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import viewsets,permissions
from .models import booksell_model
from .serializers import booksell_serializers

# class booksell_view(CreateAPIView):
#     serializer_class=booksell_serializers
   


# class booksell_list_view(ListAPIView):
#     serializer_class=booksell_serializers
#     permission_classes=[permissions.AllowAny]
#     queryset=booksell_model.objects.all()

class booksell_delete_view(viewsets.ModelViewSet):
    permission_classes=[permissions.IsAuthenticated]

    serializer_class=booksell_serializers

    def get_queryset(self):
        return self.request.user.sell_books.all()

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)