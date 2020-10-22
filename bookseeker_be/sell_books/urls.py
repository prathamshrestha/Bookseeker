from django.urls import path
from .views import booksell_delete_view,booksell_list_view,booksell_view,user_booklist_view
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

# router=routers.DefaultRouter()
# router.register('booksell',booksell_delete_view,'booksell')


# urlpatterns = router.urls

# urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns=[
    
    path('bookbuy/',booksell_list_view.as_view()),
    path('booksell/',booksell_view.as_view()),
    path('bookupdate/<int:id>',booksell_delete_view.as_view()),
    path('userbooklist/',user_booklist_view.as_view()),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
