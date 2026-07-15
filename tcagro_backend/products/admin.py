from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Product, Enquiry


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name_en", "name_hi", "icon_emoji", "order", "product_count")
    ordering = ("order",)

    def product_count(self, obj):
        return obj.products.count()
    product_count.short_description = "# Products"


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("thumb", "name_en", "category", "price_per_unit", "unit",
                     "stock_quantity", "is_available", "is_featured")
    list_display_links = ("thumb", "name_en")
    list_editable = ("stock_quantity", "is_available", "is_featured")
    list_filter = ("category", "is_available", "is_featured", "unit")
    search_fields = ("name_en", "name_hi")

    fieldsets = (
        ("Basic Info", {
            "fields": ("category", ("name_en", "name_hi"))
        }),
        ("Photo", {
            "fields": ("image", "image_preview", "ai_image_prompt_used"),
            "description": (
                "Upload a real photo of the seedling/product whenever possible. "
                "Need help getting a photo made? See 'AI IMAGE GENERATION GUIDE' in the "
                "project README for ready-to-use prompts you can paste into an image tool."
            ),
        }),
        ("Short Text (keep it brief — the photo does the talking)", {
            "fields": (("short_description_en", "short_description_hi"),
                       ("description_en", "description_hi"))
        }),
        ("Price & Stock", {
            "fields": (("price_per_unit", "unit"), ("stock_quantity", "minimum_order_quantity"),
                       ("is_available", "is_featured"))
        }),
    )
    readonly_fields = ("image_preview",)

    def thumb(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height:50px;width:50px;object-fit:cover;'
                                'border-radius:10px;" />', obj.image.url)
        return "—"
    thumb.short_description = "Photo"

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height:180px;border-radius:14px;" />', obj.image.url)
        return "No photo uploaded yet"
    image_preview.short_description = "Preview"


STATUS_COLORS = {
    "new": "#e07a1f",
    "called": "#2b6cb0",
    "confirmed": "#1e7e34",
    "not_interested": "#888888",
}


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ("customer_name", "phone_link", "product", "quantity",
                     "bid_price_per_unit", "total_bid_value", "status_badge", "created_at")
    list_filter = ("status", "product__category", "created_at")
    search_fields = ("customer_name", "phone_number", "product__name_en")
    list_editable = ()
    readonly_fields = ("created_at", "total_bid_value")
    date_hierarchy = "created_at"

    fieldsets = (
        ("Customer", {"fields": (("customer_name", "phone_number"), "village_or_address")}),
        ("Bid", {"fields": ("product", ("quantity", "bid_price_per_unit"), "total_bid_value", "message")}),
        ("Follow-up", {"fields": ("status", "staff_notes", "created_at")}),
    )

    def phone_link(self, obj):
        return format_html('<a href="tel:{0}">{0}</a>', obj.phone_number)
    phone_link.short_description = "Phone"

    def status_badge(self, obj):
        color = STATUS_COLORS.get(obj.status, "#333")
        return format_html(
            '<span style="background:{};color:white;padding:3px 10px;border-radius:999px;font-size:12px;">{}</span>',
            color, obj.get_status_display()
        )
    status_badge.short_description = "Status"

    def total_bid_value(self, obj):
        return f"₹{obj.total_bid_value}"
    total_bid_value.short_description = "Total Value"
