from django.urls import path
from . import views

#creatign the URL'S paths
urlpatterns = [
    path('', views.index, name='index'), 
    path('/Programs', views.Programs, name='programs'),
    path('/About', views.About, name='About'),
]