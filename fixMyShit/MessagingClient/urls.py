from django.conf.urls import patterns, url
from MessagingClient import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'),
        url(r'^(?P\d+)/$', views.chatRoom, name='chat_room'),
)