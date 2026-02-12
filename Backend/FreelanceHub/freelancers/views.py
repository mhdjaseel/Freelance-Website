from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,AllowAny
from .serializers import *
from clients.models import Job

class FreelancerRegistration(APIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = FreelancerRegisterSerializer(
            data=request.data,
            context={"request": request}
        )

        if serializer.is_valid():
            serializer.save()

            request.user.profile_completion = True
            request.user.save()

            return Response(
                {"message": "Successfully Completed"},
                status=status.HTTP_200_OK
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class Joblist(APIView):

    permission_classes = [IsAuthenticated]
    def get(self,request):
        jobs = Job.objects.all()
        serializers = JoblistSerializer(jobs , many = True)
        return Response(serializers.data)