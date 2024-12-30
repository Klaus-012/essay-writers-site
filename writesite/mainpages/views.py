from django.shortcuts import render
from django.template import loader

# Create your views here.
def index(request):
    tempate = loader.get_template('mainpages/index.html')
    return render(request, 'mainpages/index.html')