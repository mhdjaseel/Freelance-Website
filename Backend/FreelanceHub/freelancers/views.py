from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
# Create your views here.

class TestView(APIView):
    def get(self,request):
        data = {
            "message": "Hello from Django!"
        }
        return JsonResponse(data)
