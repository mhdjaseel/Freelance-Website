from django.urls import path
from .views import *
urlpatterns = [
    path("FreelancerRegistration/", FreelancerRegistration.as_view(), name="FreelancerRegistration")
]
