from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import status
from . serializers import *
from freelancers.models import Proposal
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

class Projectlist(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        active_projects = Job.objects.filter(client = request.user,status = 'in_progress')
        open_projects = Job.objects.filter(client = request.user,status = 'open')
        complete_projects = Job.objects.filter(client = request.user,status = 'completed')
        cancel_projects = Job.objects.filter(client = request.user,status = 'closed')
        data = {
            'active_projects': JoblistSerializer(active_projects, many=True, context={'request': request}).data,
            'open_projects': JoblistSerializer(open_projects, many=True, context={'request': request}).data,
            'complete_projects': JoblistSerializer(complete_projects, many=True, context={'request': request}).data,
            'cancel_projects': JoblistSerializer(cancel_projects, many=True, context={'request': request}).data,
        }
        return Response(data)

class ProposalList(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request,id):
    
        print('id',id)
        data = Proposal.objects.filter(job_id = id)
        
        serializer = ProposalSerializer(data, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)