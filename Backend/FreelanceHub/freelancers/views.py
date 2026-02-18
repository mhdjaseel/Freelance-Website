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
        serializers = JoblistSerializer(jobs , many = True,context = {'request':request})
        return Response(serializers.data)
    
class CreateProposal(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request):
        jobId = request.data.get('Job')
        job_instance = Job.objects.get(id = jobId)
        if Proposal.objects.filter(job = job_instance ,freelancer = request.user).exists():
            return Response({'error':'Already Applied for this Job'},status=status.HTTP_208_ALREADY_REPORTED)
        serializer = CreateProposalSerializer(data = request.data,context={'user':request.user,'job':job_instance}) 
        if serializer.is_valid():
            serializer.save()           
            return Response({'message':'Successfully created'},status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)