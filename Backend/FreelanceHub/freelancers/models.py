from django.db import models
from django.contrib.auth import get_user_model

CustomUser = get_user_model()
# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class FreelancerProfile(models.Model):

    user = models.OneToOneField(CustomUser, related_name='freelancer_profile', on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    title = models.CharField(max_length=200, blank=True, null=True)
    bio = models.TextField(blank=True)
    website = models.URLField(blank=True, null=True)
    skills = models.ManyToManyField(Skill, blank=True,related_name='freelancers')
    def __str__(self):
        return f"{self.user.last_name}'s Freelancer Profile"
