from rest_framework import serializers
from .models import ClientProfile,Job,Project
from django.contrib.auth import get_user_model
from freelancers.models import Proposal,FreelancerProfile,Skill
from accounts.serilaizers import UserInfoSerializer
CustomUser = get_user_model()

class ClientRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = '__all__'
        read_only_fields = ['user']
    def create(self, validated_data):
        user = self.context['user']
        client = ClientProfile.objects.create(user=user,**validated_data )
        return client
    
class JobPostSerializer(serializers.ModelSerializer):
    deadline = serializers.DateField(
        required=False,
        allow_null=True
    )
    class Meta:
        model = Job
        exclude = ['client']     # client doesnt come from react 

    def create(self, validated_data):
        user = self.context['user']
        job = Job.objects.create(client = user,**validated_data)
        return job
class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = '__all__'   

class ClientDetailSerializer(serializers.ModelSerializer):
    client_profile = ClientProfileSerializer()
    class Meta:
        model = CustomUser
        fields = '__all__'

class JoblistSerializer(serializers.ModelSerializer):
    client = ClientDetailSerializer()
    class Meta:
        model = Job
        fields = '__all__'
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class FreelancerSeriliazer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    user = UserInfoSerializer()
    class Meta:
        model = FreelancerProfile
        fields = '__all__'
    
class ProposalSerializer(serializers.ModelSerializer):
    job = JoblistSerializer()
    freelancer = FreelancerSeriliazer()
    class Meta:
        model = Proposal
        fields = '__all__'
    
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectDetailsSerializer(serializers.ModelSerializer):
    job = JoblistSerializer()
    client = ClientProfileSerializer()
    freelancer = FreelancerSeriliazer()
    proposal = ProposalSerializer()
    class Meta:
        model = Project
        fields = '__all__'