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
