from django.urls import path
from .views import *
urlpatterns = [
    path("ClientRegistration/", ClientRegistration.as_view(), name="ClientRegistration"),
    path("JobPost/", JobPost.as_view(), name="JobPost")

]
