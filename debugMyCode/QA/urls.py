from django.conf.urls import url, patterns, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [url(r'^getAllQuestions/$', views.AllQuestionsView.as_view(), name='index'),
               url(r'^getQuestion/(?P<pk>[0-9]+)$', views.QuestionDetailView.as_view()),
               url(r'^createQuestion/$', views.AskQuestionView.as_view(), name='askQuestion'),
               ]

urlpatterns = format_suffix_patterns(urlpatterns)

