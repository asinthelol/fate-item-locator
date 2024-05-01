from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import ItemsSerializer
from .models import Items



class ItemView(viewsets.ModelViewSet):
  '''
  A view that returns a list of all items in the database.
  queryset: what do we wanna return (all items in the database)
  serializer_class: convert the queryset into JSON data
  '''
  queryset = Items.objects.all()
  serializer_class = ItemsSerializer

  def create(self, request, *args, **kwargs):
        print(request.data)  # Print the request data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
  