"""
Run with: python manage.py shell < seed_demo_data.py

Creates a handful of demo categories, products, one farm, one nursery,
a couple of beds and progress photos so you have something to look at
in the admin and test the API against. Safe to run once; skips if data
already exists.
"""
import django
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tcagro_backend.settings")
django.setup()

from products.models import Category, Product
from farms.models import Location, Bed
from core.models import SiteSettings

if not Category.objects.exists():
    veg = Category.objects.create(name_en="Vegetable Seedlings", name_hi="सब्जी की पौध", icon_emoji="🥬", order=1)
    fruit = Category.objects.create(name_en="Fruit Plants", name_hi="फल के पौधे", icon_emoji="🍎", order=2)
    seed = Category.objects.create(name_en="Seeds", name_hi="बीज", icon_emoji="🌱", order=3)

    Product.objects.create(
        category=veg, name_en="Tomato Seedling", name_hi="टमाटर की पौध",
        short_description_en="Healthy, disease-free tomato seedlings ready to transplant",
        short_description_hi="स्वस्थ, रोगमुक्त टमाटर की पौध, रोपाई के लिए तैयार",
        price_per_unit=2.5, unit="piece", stock_quantity=5000, is_featured=True,
    )
    Product.objects.create(
        category=veg, name_en="Capsicum Seedling", name_hi="शिमला मिर्च की पौध",
        short_description_en="Strong capsicum seedlings, polyhouse-raised",
        short_description_hi="मजबूत शिमला मिर्च की पौध, पॉलीहाउस में तैयार",
        price_per_unit=3, unit="piece", stock_quantity=3000,
    )
    Product.objects.create(
        category=fruit, name_en="Guava Plant", name_hi="अमरूद का पौधा",
        short_description_en="Grafted guava plant, fruits within 18 months",
        short_description_hi="कलम किया हुआ अमरूद का पौधा, 18 महीने में फल",
        price_per_unit=120, unit="piece", stock_quantity=200,
    )
    print("Created categories & products")

if not Location.objects.exists():
    nursery = Location.objects.create(
        location_type="nursery", name_en="Karnal Nursery", name_hi="करनाल नर्सरी",
        village_en="Karnal, Haryana", village_hi="करनाल, हरियाणा",
        short_description_en="Our main seedling-raising nursery",
        short_description_hi="हमारी मुख्य पौध तैयार करने वाली नर्सरी",
        latitude=29.6857, longitude=76.9905,
    )
    farm = Location.objects.create(
        location_type="farm", name_en="Bhraf Organic Farm", name_hi="भ्राफ ऑर्गेनिक फार्म",
        village_en="Bhraf, Haryana", village_hi="भ्राफ, हरियाणा",
        short_description_en="Open-field organic vegetable cultivation",
        short_description_hi="खुले खेत में जैविक सब्जी की खेती",
        latitude=29.05, longitude=76.34,
    )
    Bed.objects.create(
        location=nursery, name_en="Tray Row 1", name_hi="ट्रे पंक्ति 1",
        crop_name_en="Tomato", crop_name_hi="टमाटर", status="ready", quantity_available=1200,
    )
    Bed.objects.create(
        location=farm, name_en="Bed 3", name_hi="बेड 3",
        crop_name_en="Capsicum", crop_name_hi="शिमला मिर्च", status="growing",
    )
    print("Created locations & beds")

settings_obj = SiteSettings.load()
if not settings_obj.phone_primary:
    settings_obj.phone_primary = "+91XXXXXXXXXX"
    settings_obj.tagline_en = "Growing trust, one seedling at a time"
    settings_obj.tagline_hi = "हर पौध के साथ भरोसा बढ़ाते हुए"
    settings_obj.save()
    print("Updated site settings")

print("Seed complete.")
