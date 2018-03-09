from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^(?i)', views.index, name='index'),
]