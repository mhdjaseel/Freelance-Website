from rest_framework import serializers
from .models import ClientProfile
from django.contrib.auth import get_user_model

CustomUSer = get_user_model()

class ClientRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = '__all__'
        read_only_fields = ['user']
    def create(self, validated_data):
        user = self.context['user']
        client = ClientProfile.objects.create(user=user,**validated_data )
        return client