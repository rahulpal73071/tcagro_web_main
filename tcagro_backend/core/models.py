from django.db import models


class SiteSettings(models.Model):
    """
    Singleton-style model for site-wide info that changes rarely:
    office address, phone/WhatsApp numbers, map coordinates.
    Staff edit this from ONE simple admin page instead of touching code.
    """
    office_name_en = models.CharField(max_length=200, default="Tiera & Cielo Agro")
    office_name_hi = models.CharField(max_length=200, default="टिएरा एंड सिएलो एग्रो")

    address_en = models.TextField(blank=True, help_text="Full office/farm address in English")
    address_hi = models.TextField(blank=True, help_text="पता हिंदी में")

    # Used to plot the office on the styled map on the Contact/Home page.
    latitude = models.DecimalField(max_digits=9, decimal_places=6, default=29.0588)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, default=76.0856)

    phone_primary = models.CharField(max_length=20, help_text="Shown as click-to-call button")
    whatsapp_number = models.CharField(max_length=20, blank=True, help_text="Digits only with country code, e.g. 91XXXXXXXXXX")
    email = models.EmailField(blank=True)

    logo = models.ImageField(upload_to="site/", blank=True, null=True,
                              help_text="Square logo. Used in header, browser tab icon, and splash animation.")

    tagline_en = models.CharField(max_length=200, blank=True, help_text="Short line shown under the logo on load")
    tagline_hi = models.CharField(max_length=200, blank=True)

    class Meta:
        verbose_name = "Site Setting"
        verbose_name_plural = "Site Settings (edit the one entry)"

    def __str__(self):
        return "Website Settings"

    def save(self, *args, **kwargs):
        self.pk = 1  # enforce a single row
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


CONTACT_STATUS_CHOICES = [
    ("new", "New — not yet read"),
    ("replied", "Replied / Called"),
    ("closed", "Closed"),
]


class ContactMessage(models.Model):
    """
    A simple 'write to us' message from the website — name, village, phone,
    and a free-text message. Meant for anything that isn't a product bid
    (general questions, complaints, partnership interest, etc).
    """
    name = models.CharField(max_length=100)
    village_or_address = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=15)
    message = models.TextField()

    status = models.CharField(max_length=10, choices=CONTACT_STATUS_CHOICES, default="new")
    staff_notes = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} — {self.created_at:%d %b %Y}"
