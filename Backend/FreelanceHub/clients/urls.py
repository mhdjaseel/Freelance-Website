from django.urls import path
from .views import *
urlpatterns = [
    path("ClientRegistration/", ClientRegistration.as_view(), name="ClientRegistration"),
    path("JobPost/", JobPost.as_view(), name="JobPost"),
    path("Projectlist/", Projectlist.as_view(), name="Projectlist"),
    path("ProposalList/<int:id>/", ProposalList.as_view(), name="ProposalList")


]
