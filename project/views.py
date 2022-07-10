from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'project/card.html')

def project1(request):
    return render(request,'project/project1.html')

def project2(request):
    return render(request,'project/project2.html')

