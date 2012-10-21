from django.shortcuts import render_to_response
from django.http import HttpResponse
import datetime

def index(request):
    """render template for index.html"""
    tmpl = 'page/index.html'
    now = datetime.datetime.now()
    data = { 'time': now }
    return render_to_response(tmpl, data)

def demo(request):
    """render template for index.html"""
    tmpl = 'page/demo.htm'
    return render_to_response(tmpl, {'lists': range(6)})
