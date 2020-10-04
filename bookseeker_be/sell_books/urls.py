from django.urls import path
from .views import booksell_view, booksell_list_view,booksell_delete_view
urlpatterns = [
    path('booksell/',booksell_view.as_view()),
    path('booksell/update_delete/<int:pk>/',booksell_delete_view.as_view()),
    path('booksell/list/',booksell_list_view.as_view()),

]