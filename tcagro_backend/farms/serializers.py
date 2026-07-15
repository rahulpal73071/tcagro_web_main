from rest_framework import serializers
from .models import Location, Bed, ProgressUpdate


class ProgressUpdateSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = ProgressUpdate
        fields = ["id", "image", "date", "caption_en", "caption_hi"]


class BedListSerializer(serializers.ModelSerializer):
    """Lightweight version — used inside a Location's bed list."""
    cover_image = serializers.ImageField(use_url=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Bed
        fields = [
            "id", "name_en", "name_hi", "crop_name_en", "crop_name_hi",
            "cover_image", "sown_date", "expected_ready_date",
            "status", "status_display", "quantity_available",
        ]


class BedDetailSerializer(serializers.ModelSerializer):
    """Full version — used on the bed detail page, includes the photo timeline."""
    cover_image = serializers.ImageField(use_url=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)
    updates = ProgressUpdateSerializer(many=True, read_only=True)
    location_name_en = serializers.CharField(source="location.name_en", read_only=True)
    location_name_hi = serializers.CharField(source="location.name_hi", read_only=True)

    class Meta:
        model = Bed
        fields = [
            "id", "location", "location_name_en", "location_name_hi",
            "name_en", "name_hi", "crop_name_en", "crop_name_hi",
            "cover_image", "sown_date", "expected_ready_date",
            "status", "status_display", "quantity_available", "updates",
        ]


class LocationListSerializer(serializers.ModelSerializer):
    """Lightweight version — used on the Farms & Nurseries listing page."""
    cover_image = serializers.ImageField(use_url=True)
    location_type_display = serializers.CharField(source="get_location_type_display", read_only=True)
    active_bed_count = serializers.SerializerMethodField()
    ready_bed_count = serializers.SerializerMethodField()

    class Meta:
        model = Location
        fields = [
            "id", "location_type", "location_type_display",
            "name_en", "name_hi", "village_en", "village_hi",
            "cover_image", "short_description_en", "short_description_hi",
            "latitude", "longitude", "active_bed_count", "ready_bed_count",
        ]

    def get_active_bed_count(self, obj):
        return obj.beds.filter(is_active=True).count()

    def get_ready_bed_count(self, obj):
        return obj.beds.filter(status="ready").count()


class LocationDetailSerializer(serializers.ModelSerializer):
    """Full version — used on the Farm/Nursery detail page, includes beds."""
    cover_image = serializers.ImageField(use_url=True)
    location_type_display = serializers.CharField(source="get_location_type_display", read_only=True)
    beds = BedListSerializer(many=True, read_only=True)

    class Meta:
        model = Location
        fields = [
            "id", "location_type", "location_type_display",
            "name_en", "name_hi", "village_en", "village_hi",
            "cover_image", "short_description_en", "short_description_hi",
            "description_en", "description_hi",
            "latitude", "longitude", "beds",
        ]
