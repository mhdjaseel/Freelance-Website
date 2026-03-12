from rest_framework import serializers

from django.conf import settings
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

class SignUpFormSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    
    class Meta :
        model = CustomUser
        fields = ['email','password','first_name','last_name']

    def validate_email(self, value):
        value = value.lower()
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError('Email is already taken')
        return value
        

    def create(self, validated_data):
        user = CustomUser.objects.create_user(

            email = validated_data['email'],
            password = validated_data['password'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']


        )
        return user

class UserInfoSerializer(serializers.ModelSerializer):
    
    class Meta :
        model = CustomUser
        fields = '__all__'