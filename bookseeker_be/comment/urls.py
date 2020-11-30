from django.urls import path,include
from .views import comment_delete_view,comment_list_view,comment_view




urlpatterns = [
    path('commentlist/<int:book_id>',comment_list_view.as_view()),
    path('comment/',comment_view.as_view()),
    path('comment_update_delete/<int:id>/',comment_delete_view.as_view()),



] 