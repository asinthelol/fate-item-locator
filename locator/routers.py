from rest_framework import routers
from api.views import ItemView
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'items', ItemView,)
urlpatterns = [
    path('api/', include(router.urls)),  # API base endpoint
]