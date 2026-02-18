from django.urls import path
from .views import *
urlpatterns = [
    path("FreelancerRegistration/", FreelancerRegistration.as_view(), name="FreelancerRegistration"),
    path("Joblist/", Joblist.as_view(), name="Joblist"),
    path("CreateProposal/", CreateProposal.as_view(), name="CreateProposal")


]
