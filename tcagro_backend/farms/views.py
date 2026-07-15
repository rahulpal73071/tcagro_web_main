from rest_framework import generics, permissions
from .models import Location, Bed
from .serializers import (
    LocationListSerializer, LocationDetailSerializer,
    BedDetailSerializer,
)


class LocationListView(generics.ListAPIView):
    """Public: all active farms & nurseries, optionally filtered by ?type=farm or ?type=nursery."""
    serializer_class = LocationListSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        qs = Location.objects.filter(is_active=True)
        location_type = self.request.query_params.get("type")
        if location_type in ("farm", "nursery"):
            qs = qs.filter(location_type=location_type)
        return qs


class LocationDetailView(generics.RetrieveAPIView):
    """Public: one farm/nursery page with its beds (each bed also ready-to-sell status)."""
    queryset = Location.objects.filter(is_active=True)
    serializer_class = LocationDetailSerializer
    permission_classes = [permissions.AllowAny]


class BedDetailView(generics.RetrieveAPIView):
    """Public: a single bed's page — crop info + full dated photo timeline."""
    queryset = Bed.objects.filter(is_active=True)
    serializer_class = BedDetailSerializer
    permission_classes = [permissions.AllowAny]
