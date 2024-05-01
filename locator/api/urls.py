from django.urls import path
from .views import ItemView


'''
The path to the home page (domain.com/api/home).
'''

urlpatterns = [
  path('items', ItemView.as_view())
]