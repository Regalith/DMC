

from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.views.generic import TemplateView

urlpatterns = [
    url(r'^api/QA/', include('QA.urls', namespace='QA')),
    url(r'^api/Users/', include('UserProfile.urls', namespace='UserProfile')),
    url(r'^admin/', admin.site.urls),
    url(r'^api-token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
]

urlpatterns += staticfiles_urlpatterns()


urlpatterns += [
    url(r'', TemplateView.as_view(template_name='index.html')),
]