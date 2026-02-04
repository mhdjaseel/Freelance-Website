from django.urls import path
from .views import * 
urlpatterns = [
    path("GoogleSignupView/", GoogleSignupView.as_view(), name="GoogleSignupView"),
    path("SignUpForm/", SignUpForm.as_view(), name="SignUpForm")
]