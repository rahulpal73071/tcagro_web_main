from django.urls import path
from .views import site_settings_view, ContactMessageCreateView

urlpatterns = [
    path("settings/", site_settings_view, name="site-settings"),
    path("contact-messages/", ContactMessageCreateView.as_view(), name="contact-message-create"),
]
