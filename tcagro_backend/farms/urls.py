from django.urls import path
from .views import LocationListView, LocationDetailView, BedDetailView

urlpatterns = [
    path("", LocationListView.as_view(), name="location-list"),
    path("<int:pk>/", LocationDetailView.as_view(), name="location-detail"),
    path("beds/<int:pk>/", BedDetailView.as_view(), name="bed-detail"),
]
