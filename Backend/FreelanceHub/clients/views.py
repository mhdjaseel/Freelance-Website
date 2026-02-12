from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import status
from . serializers import *
class ClientRegistration(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    def post(self,request): 
        user = request.user
        
        if ClientProfile.objects.filter(user=user).exists():
            return Response(
                {'message': 'Client profile already exists. Please edit your profile.'},
                status=status.HTTP_409_CONFLICT
            )
        
        serializer = ClientRegisterSerializer(data = request.data,context={"user": request.user})
        if serializer.is_valid():
            serializer.save()
            user.profile_completion = True
            user.save()
            return Response({'message':'Register Successfully'},status=status.HTTP_200_OK)
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
class JobPost(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request): 
        print(request.data)
        serializer = JobPostSerializer(data = request.data,context={"user": request.user})
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'successfully created job'})
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        