from django.urls import path,include
from .views import * 
urlpatterns = [
    path("TestView/", TestView.as_view(), name="TestView")
]