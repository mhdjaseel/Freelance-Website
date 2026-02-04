from django.urls import path
from .views import *
urlpatterns = [
    path("GoogleSignupView/", GoogleSignupView.as_view(), name="GoogleSignupView"),
    path("SignUpForm/", SignUpForm.as_view(), name="SignUpForm"),
    path("AssignRole/", AssignRole.as_view(), name="AssignRole"),
    path("GoogleLoginView/", GoogleLoginView.as_view(), name="GoogleLoginView"),
    path("LoginFormView/", LoginFormView.as_view(), name="LoginFormView")
]