

from django.conf.urls import url, include
from django.contrib import admin


urlpatterns = [
    url(r'^api/QA/', include('QA.urls', namespace='QA')),
    url(r'^api/Users/', include('UserProfile.urls', namespace='UserProfile')),
    url(r'^admin/', admin.site.urls),
]
