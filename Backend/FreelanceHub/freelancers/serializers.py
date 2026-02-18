from rest_framework import serializers
from .models import FreelancerProfile, Skill,Proposal
from clients.models import Job,ClientProfile
from django.contrib.auth import get_user_model

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
    class Meta:
        model = Job
        fields = '__all__'
        read_only_fields = ['applied'] 

    def get_applied(self, obj):
        user = self.context['request'].user
        return Proposal.objects.filter(job=obj, freelancer=user).exists()

    def get_proposal_status(self,obj):
        user = self.context['request'].user
        return Proposal.objects.filter(job=obj, freelancer=user).exists()
    
    def get_proposal_status(self, obj):
        user = self.context['request'].user
        proposal = Proposal.objects.filter(job=obj, freelancer=user).first()
        return proposal.status if proposal else None

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