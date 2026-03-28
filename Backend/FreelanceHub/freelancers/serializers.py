from rest_framework import serializers
from .models import FreelancerProfile, Skill,Proposal
from clients.models import Job,ClientProfile,Project
from django.contrib.auth import get_user_model
from accounts.serilaizers import UserInfoSerializer

CustomUser = get_user_model()

class FreelancerRegisterSerializer(serializers.ModelSerializer):
    skills = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = FreelancerProfile
        fields = [
            "title",
            "bio",
            "website",
            "profile_picture",
            "skills",
        ]

    def create(self, validated_data):
        request = self.context["request"]
        user = request.user

        skills_str = validated_data.pop("skills", "")
        
        skill_names = [
            s.strip().lower()
            for s in skills_str.split(",")
            if s.strip()
        ]

        freelancer = FreelancerProfile.objects.create(
            user=user,
            **validated_data
        )

        for name in skill_names:
            skill, _ = Skill.objects.get_or_create(name=name)
            freelancer.skills.add(skill)

        return freelancer
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
    applied = serializers.SerializerMethodField()
    proposal_status = serializers.SerializerMethodField()
    client = ClientDetailSerializer()
    #proposal_count = serializers.SerializerMethodField()
    class Meta:
        model = Job
        fields = '__all__'
        read_only_fields = ['applied'] 

    def get_applied(self, obj):
        user = self.context['request'].user
        freelancer_profile = getattr(user, 'freelancer_profile', None)
        if not freelancer_profile:
            return False
        return Proposal.objects.filter(job=obj, freelancer=freelancer_profile).exists()

    def get_proposal_status(self, obj):
        freelancer_profile = self.context.get('freelancer_profile', None)
        if not freelancer_profile:
            return None
        proposal = Proposal.objects.filter(job=obj, freelancer=freelancer_profile).first()
        if proposal:
            return proposal.status  # or whatever field you want to show
        return None
    


class CreateProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposal
        fields = '__all__'
        read_only_fields = ['job', 'freelancer']

    def create(self, validated_data):
        Job = self.context['job']
        freelancer = self.context['user']
        proposal = Proposal.objects.create(job = Job, freelancer = freelancer,**validated_data)
        return proposal
    
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
    job = JoblistSerializer()
    client = ClientProfileSerializer()
    freelancer = FreelancerSeriliazer()
    proposal = ProposalSerializer()
    class Meta:
        model = Project
        fields = '__all__'