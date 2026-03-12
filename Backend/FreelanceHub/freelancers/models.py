from django.db import models
from django.contrib.auth import get_user_model
from clients.models import Job
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
    
    
class Proposal(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]
    
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='proposals')
    freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.CASCADE, related_name='proposals_sent')
    cover_letter = models.TextField(blank=True)
    proposed_amount = models.DecimalField(max_digits=10, decimal_places=2,blank=True,null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['job', 'freelancer']  # One proposal per freelancer per job
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Proposal by {self.freelancer.email} for {self.job.title}"
