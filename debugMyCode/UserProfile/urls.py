from django.conf.urls import url, patterns, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [url(r'^users/$', views.UserProfileDetailView.as_view(), name='user'),

               ]

urlpatterns = format_suffix_patterns(urlpatterns)

