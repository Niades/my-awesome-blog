from django.conf.urls import url, include
from rest_framework import routers
from blog import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


router = routers.DefaultRouter()


urlpatterns = [
    url(r'^$', views.IndexView.as_view()),
    url(r'^api/v1/', include(router.urls)),
]
urlpatterns += staticfiles_urlpatterns()
