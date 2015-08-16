__author__ = 'Tim'

from django.conf.urls import url
from . import views

urlpatterns = [url(r'^$', views.IndexView.as_view(), name='index'),
               url(r'^(?P<pk>[0-9]+)/$', views.QuestionView.as_view(), name='question'),
               url(r'askQuestion', views.ask_question, name='ask_question'),
               ]

