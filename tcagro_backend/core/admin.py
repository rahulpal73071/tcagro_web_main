from django.contrib import admin
from django.utils.html import format_html
from .models import SiteSettings, ContactMessage


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    """
    Only one row ever exists. Admin list is skipped and staff are sent
    straight to the edit form for a simpler experience.
    """
    fieldsets = (
        ("Names / Tagline", {
            "fields": (("office_name_en", "office_name_hi"), ("tagline_en", "tagline_hi"))
        }),
        ("Contact", {
            "fields": ("phone_primary", "whatsapp_number", "email")
        }),
        ("Address & Map Location", {
            "fields": (("address_en", "address_hi"), ("latitude", "longitude")),
            "description": "Tip: open Google Maps, right-click your office pin, and copy the "
                            "two numbers shown at the top — that is Latitude, Longitude."
        }),
        ("Logo", {
            "fields": ("logo", "logo_preview"),
        }),
    )
    readonly_fields = ("logo_preview",)

    def logo_preview(self, obj):
        if obj.logo:
            return format_html('<img src="{}" style="height:80px;border-radius:12px;" />', obj.logo.url)
        return "No logo uploaded yet"
    logo_preview.short_description = "Preview"

    def has_add_permission(self, request):
        # Block creating a second row.
        return not SiteSettings.objects.exists()

    def changelist_view(self, request, extra_context=None):
        obj = SiteSettings.load()
        from django.shortcuts import redirect
        return redirect(f"/admin/core/sitesettings/{obj.pk}/change/")


STATUS_COLORS = {"new": "#e07a1f", "replied": "#2b6cb0", "closed": "#888888"}


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "phone_link", "village_or_address", "status_badge", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("name", "phone_number", "message")
    readonly_fields = ("created_at",)
    date_hierarchy = "created_at"

    fieldsets = (
        ("From", {"fields": (("name", "phone_number"), "village_or_address")}),
        ("Message", {"fields": ("message",)}),
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
