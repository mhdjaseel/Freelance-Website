from rest_framework import serializers
from .models import FreelancerProfile, Skill


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
