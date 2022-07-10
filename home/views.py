from multiprocessing import context
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,"home/index.html")

def certificate(request):
    return render(request,"project/certificates.html")
