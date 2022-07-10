from django.urls import path, include
from . import views

urlpatterns = [
    path("",views.index,name="index"),
    path("contact/",include('contact.urls')),
    path("project",include('project.urls')),
    path("certificate",views.certificate,name="certificates"),
]