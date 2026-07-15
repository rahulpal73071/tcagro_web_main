from rest_framework import serializers
from .models import SiteSettings, ContactMessage


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(use_url=True)

    class Meta:
        model = SiteSettings
        fields = [
            "office_name_en", "office_name_hi",
            "address_en", "address_hi",
            "latitude", "longitude",
            "phone_primary", "whatsapp_number", "email",
            "logo", "tagline_en", "tagline_hi",
        ]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "village_or_address", "phone_number", "message"]

    def validate_phone_number(self, value):
        digits = "".join(ch for ch in value if ch.isdigit())
        if len(digits) < 10:
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value
