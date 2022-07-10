from django.urls import path, include
from . import views

urlpatterns = [
    path("",views.home,name="project"),
    path("/project1",views.project1,name="project1"),
    path("/project2",views.project2,name="project2")
]