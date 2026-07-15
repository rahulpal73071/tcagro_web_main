from django.contrib import admin
from django.utils.html import format_html
from .models import Location, Bed, ProgressUpdate


class BedInline(admin.TabularInline):
    model = Bed
    extra = 0
    fields = ("name_en", "crop_name_en", "status", "sown_date", "quantity_available", "is_active")
    show_change_link = True


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ("thumb", "name_en", "location_type", "village_en", "bed_count", "is_active", "order")
    list_display_links = ("thumb", "name_en")
    list_filter = ("location_type", "is_active")
    list_editable = ("order",)
    inlines = [BedInline]

    fieldsets = (
        ("Basic Info", {"fields": ("location_type", ("name_en", "name_hi"), ("village_en", "village_hi"))}),
        ("Photo", {"fields": ("cover_image", "cover_preview")}),
        ("Text", {"fields": (("short_description_en", "short_description_hi"),
                              ("description_en", "description_hi"))}),
        ("Map Location", {
            "fields": (("latitude", "longitude"),),
            "description": "Open Google Maps, right-click your farm's location on the map, "
                            "and copy the Latitude, Longitude shown at the top.",
        }),
        ("Status", {"fields": ("is_active", "order")}),
    )
    readonly_fields = ("cover_preview",)

    def thumb(self, obj):
        if obj.cover_image:
            return format_html('<img src="{}" style="height:50px;width:70px;object-fit:cover;'
                                'border-radius:10px;" />', obj.cover_image.url)
        return "—"
    thumb.short_description = "Photo"

    def cover_preview(self, obj):
        if obj.cover_image:
            return format_html('<img src="{}" style="height:180px;border-radius:14px;" />', obj.cover_image.url)
        return "No photo uploaded yet"
    cover_preview.short_description = "Preview"

    def bed_count(self, obj):
        return obj.beds.count()
    bed_count.short_description = "Beds/Plots"


class ProgressUpdateInline(admin.TabularInline):
    model = ProgressUpdate
    extra = 1
    fields = ("image", "preview", "date", "caption_en", "caption_hi")
    readonly_fields = ("preview",)
    ordering = ("date",)

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height:60px;border-radius:8px;" />', obj.image.url)
        return "—"
    preview.short_description = "Preview"


@admin.register(Bed)
class BedAdmin(admin.ModelAdmin):
    list_display = ("thumb", "location", "name_en", "crop_name_en", "status",
                     "sown_date", "quantity_available", "update_count")
    list_display_links = ("thumb", "name_en")
    list_filter = ("location", "status")
    list_editable = ()
    inlines = [ProgressUpdateInline]

    fieldsets = (
        ("Where", {"fields": ("location", ("name_en", "name_hi"))}),
        ("Crop", {"fields": (("crop_name_en", "crop_name_hi"), "cover_image", "cover_preview")}),
        ("Timeline Dates", {"fields": (("sown_date", "expected_ready_date"), "status")}),
        ("Selling", {"fields": ("quantity_available",),
                      "description": "Fill in once this bed's crop/seedlings are ready to sell — "
                                      "this number shows on the public website."}),
        ("Status", {"fields": ("is_active",)}),
    )
    readonly_fields = ("cover_preview",)

    def thumb(self, obj):
        if obj.cover_image:
            return format_html('<img src="{}" style="height:50px;width:70px;object-fit:cover;'
                                'border-radius:10px;" />', obj.cover_image.url)
        return "—"
    thumb.short_description = "Photo"

    def cover_preview(self, obj):
        if obj.cover_image:
            return format_html('<img src="{}" style="height:180px;border-radius:14px;" />', obj.cover_image.url)
        return "No photo uploaded yet"
    cover_preview.short_description = "Preview"

    def update_count(self, obj):
        return obj.updates.count()
    update_count.short_description = "Timeline Photos"
