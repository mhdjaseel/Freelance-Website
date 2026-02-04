from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken 
from google.oauth2 import id_token 
from google.auth.transport import requests
from django.conf import settings
from rest_framework.permissions import AllowAny
from .serilaizers import *
from django.contrib.auth import get_user_model

CustomUser = get_user_model()
# Create your views here.


class GoogleSignupView(APIView):
    """
    Accepts Google OAuth token from frontend,
    verifies it, creates/gets user, returns JWT token
    """
    permission_classes=[AllowAny]
    def post(self, request):
        # Get the token from React
        token = request.data.get('token')
        if not token:
            return Response(
                {'error': 'Token is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:

            # Verify the Google token
            idinfo = id_token.verify_oauth2_token(
                token, 
                requests.Request(), 
                settings.GOOGLE_OAUTH_CLIENT_ID
            )

            email = idinfo.get('email')

            if  CustomUser.objects.filter(email=email).exists():
                return Response({'message': 'Email Already Taken'}, status=status.HTTP_400_BAD_REQUEST) 
                    
            # Extract user info from Google
            first_name = idinfo.get('given_name', '')
            last_name = idinfo.get('family_name', '')
            picture = idinfo.get('picture', '')
            
            # Get or create user
            
            user = CustomUser.objects.create_user(
                email=email,
                first_name = first_name,
                last_name = last_name,
                password=None
            )
            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
            
            return Response({
                'access': access_token,
                'refresh': refresh_token,
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'picture': picture,
                }
            },status=status.HTTP_200_OK)
            
        except ValueError as e:

            # Invalid token
            return Response(
                {'error': 'Invalid token'}, 
                status=status.HTTP_401_UNAUTHORIZED
            )

class SignUpForm(APIView):
    def post(self,request):
        print(request.data)
        email = request.data.get('email')
        print(email)
        if  CustomUser.objects.filter(email=email).exists():
                return Response({'message': 'Email Already Taken'}, status=status.HTTP_400_BAD_REQUEST) 
        serializer  = SignUpFormSerializer(data = request.data)
        if serializer.is_valid():
                serializer.save() 
                return Response({'message':'Account Created Successfully'},status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)