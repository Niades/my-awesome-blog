from django.conf.urls import url, include
from rest_framework import routers
from blog import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


router = routers.DefaultRouter()
router.register('blog-entry', views.BlogEntryViewSet)


urlpatterns = [
    url(r'^$', views.IndexView.as_view()),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/login', views.login_view),
    url(r'^api/v1/profile', views.profile_view),
]
urlpatterns += staticfiles_urlpatterns()
