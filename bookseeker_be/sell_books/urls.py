from django.urls import path
from .views import booksell_delete_view
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

router=routers.DefaultRouter()
router.register('booksell',booksell_delete_view,'booksell')

urlpatterns = router.urls

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)