from rest_framework import serializers
from .models import Items

class ItemsSerializer(serializers.ModelSerializer):
    '''
    This class is responsible for turning the model into JSON data.
    Takes in the model (Items) and the fields to be serialized ('__all__' means all fields in the model)
    '''
    class Meta:
        model = Items
        fields = '__all__'