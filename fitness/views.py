from django.shortcuts import render

#rendering the HTML
def index(request):
    return render(request,'index.html')

def Programs(request):
    return render(request,'ProgramsPage.html')

def About(request):
    return render(request,'AboutPage.html')