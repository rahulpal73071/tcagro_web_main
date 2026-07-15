from django.db import models

LOCATION_TYPE_CHOICES = [
    ("farm", "Farm"),
    ("nursery", "Nursery"),
]


class Location(models.Model):
    """A single farm or nursery site (e.g. Karnal Nursery, Bhraf Farm)."""
    location_type = models.CharField(max_length=10, choices=LOCATION_TYPE_CHOICES)

    name_en = models.CharField(max_length=150)
    name_hi = models.CharField(max_length=150)

    village_en = models.CharField(max_length=120, blank=True)
    village_hi = models.CharField(max_length=120, blank=True)

    latitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)

    cover_image = models.ImageField(
        upload_to="locations/", blank=True, null=True,
        help_text="Wide photo of the farm/nursery, used as the card and page banner.")

    short_description_en = models.CharField(max_length=160, blank=True)
    short_description_hi = models.CharField(max_length=160, blank=True)

    description_en = models.TextField(blank=True)
    description_hi = models.TextField(blank=True)

    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "name_en"]

    def __str__(self):
        return f"{self.name_en} ({self.get_location_type_display()})"


BED_STATUS_CHOICES = [
    ("prepared", "Prepared / Not Yet Sown"),
    ("growing", "Growing"),
    ("ready", "Ready to Sell / Harvest"),
    ("harvested", "Harvested / Cleared"),
]


class Bed(models.Model):
    """
    A bed / plot / polyhouse row inside a Location. Multiple beds can run
    at the same time on the same farm, each with its own crop and its own
    photo timeline.
    """
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name="beds")

    name_en = models.CharField(max_length=100, help_text="e.g. 'Bed 3' or 'Polyhouse A - Row 2'")
    name_hi = models.CharField(max_length=100)

    crop_name_en = models.CharField(max_length=100)
    crop_name_hi = models.CharField(max_length=100)

    cover_image = models.ImageField(upload_to="beds/", blank=True, null=True,
                                     help_text="Current best photo of this bed — shown on the farm page.")

    sown_date = models.DateField(blank=True, null=True)
    expected_ready_date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=12, choices=BED_STATUS_CHOICES, default="growing")

    quantity_available = models.PositiveIntegerField(
        default=0, help_text="Filled in once status is 'Ready to Sell' — how many units are available")

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-sown_date"]

    def __str__(self):
        return f"{self.location.name_en} — {self.name_en} ({self.crop_name_en})"


class ProgressUpdate(models.Model):
    """
    One dated photo + short caption in a bed's timeline.
    This is what a farmer sees when they click into a bed:
    a simple photo-by-date story of the crop growing.
    """
    bed = models.ForeignKey(Bed, on_delete=models.CASCADE, related_name="updates")

    image = models.ImageField(upload_to="progress/")
    date = models.DateField()

    caption_en = models.CharField(max_length=160, blank=True,
                                   help_text="e.g. 'First leaves appearing' — keep it short and simple")
    caption_hi = models.CharField(max_length=160, blank=True)

    class Meta:
        ordering = ["date"]

    def __str__(self):
        return f"{self.bed} — {self.date}"
