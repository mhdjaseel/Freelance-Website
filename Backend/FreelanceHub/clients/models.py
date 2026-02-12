from django.db import models
from django.contrib.auth import get_user_model

CustomUser = get_user_model()
# Create your models here.

class ClientProfile(models.Model):

    user = models.OneToOneField(CustomUser, related_name='client_profile', on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    company_name = models.CharField(max_length=200, blank=True, null=True)
    company_description = models.TextField(blank=True)
    website = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.user.last_name}'s Client Profile"


class Job(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('closed', 'Closed'),
    ]
    
    BUDGET_TYPE_CHOICES = [
        ('fixed', 'Fixed Price'),
        ('hourly', 'Hourly Rate'),
    ]
    
    client = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='jobs_posted')
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100) 
    skills_required = models.CharField(max_length=500)  # Comma-separated
    budget_type = models.CharField(max_length=20, choices=BUDGET_TYPE_CHOICES)
    budget_amount = models.DecimalField(max_digits=10, decimal_places=2,null=True,blank=True)
    deadline = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.title} - {self.client.email}"
