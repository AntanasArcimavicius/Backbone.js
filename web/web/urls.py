from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index-webpack.html")),
    path('grunt/', TemplateView.as_view(template_name="index-grunt.html")),
]
