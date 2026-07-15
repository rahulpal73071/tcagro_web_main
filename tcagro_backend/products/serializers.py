from rest_framework import serializers
from .models import Category, Product, Enquiry


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name_en", "name_hi", "icon_emoji", "order"]


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    category_name_en = serializers.CharField(source="category.name_en", read_only=True)
    category_name_hi = serializers.CharField(source="category.name_hi", read_only=True)
    unit_display = serializers.CharField(source="get_unit_display", read_only=True)

    class Meta:
        model = Product
        fields = [
            "id", "category", "category_name_en", "category_name_hi",
            "name_en", "name_hi",
            "short_description_en", "short_description_hi",
            "description_en", "description_hi",
            "image", "price_per_unit", "unit", "unit_display",
            "stock_quantity", "is_available", "is_featured",
            "minimum_order_quantity",
        ]


class EnquiryCreateSerializer(serializers.ModelSerializer):
    """Used for the public 'submit a bid' form."""

    class Meta:
        model = Enquiry
        fields = [
            "id", "product", "customer_name", "phone_number",
            "village_or_address", "quantity", "bid_price_per_unit", "message",
        ]

    def validate_quantity(self, value):
        if value < 1:
            raise serializers.ValidationError("Quantity must be at least 1.")
        return value

    def validate_phone_number(self, value):
        digits = "".join(ch for ch in value if ch.isdigit())
        if len(digits) < 10:
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value
