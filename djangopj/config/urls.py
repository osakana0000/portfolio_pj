from django.urls import include, path

urlpatterns = [
    path('t-r-app/', include('schedule.urls')),
]
