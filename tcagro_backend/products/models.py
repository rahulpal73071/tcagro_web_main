from django.db import models


class Category(models.Model):
    """e.g. Vegetable Seedlings, Fruit Plants, Seeds, Fertilizer, Tools"""
    name_en = models.CharField(max_length=100)
    name_hi = models.CharField(max_length=100)
    icon_emoji = models.CharField(max_length=10, blank=True,
                                   help_text="Optional emoji shown next to the category, e.g. 🌱")
    order = models.PositiveIntegerField(default=0, help_text="Lower numbers appear first")

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ["order", "name_en"]

    def __str__(self):
        return self.name_en


UNIT_CHOICES = [
    ("piece", "Per Piece / Per Seedling"),
    ("tray", "Per Tray"),
    ("kg", "Per Kg"),
    ("dozen", "Per Dozen"),
    ("packet", "Per Packet"),
]


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="products")

    name_en = models.CharField(max_length=150)
    name_hi = models.CharField(max_length=150)

    short_description_en = models.CharField(
        max_length=160, blank=True,
        help_text="One short farmer-friendly line, e.g. 'Healthy tomato seedlings, ready to plant'")
    short_description_hi = models.CharField(max_length=160, blank=True)

    description_en = models.TextField(blank=True, help_text="Keep this short — most of the page should be the photo.")
    description_hi = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="products/", blank=True, null=True,
        help_text=(
            "Real photo of the actual seedling/product strongly preferred. "
            "If you don't have a photo yet, see 'AI image guidance' below and generate one, "
            "then upload it here."
        ),
    )
    ai_image_prompt_used = models.TextField(
        blank=True,
        help_text="If this image was AI-generated, paste the prompt you used here for your own records."
    )

    price_per_unit = models.DecimalField(max_digits=10, decimal_places=2, help_text="Your listed asking price")
    unit = models.CharField(max_length=10, choices=UNIT_CHOICES, default="piece")

    stock_quantity = models.PositiveIntegerField(default=0)
    is_available = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False, help_text="Show near the top of the Products page")

    minimum_order_quantity = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-is_featured", "category__order", "name_en"]

    def __str__(self):
        return f"{self.name_en} ({self.get_unit_display()})"


ENQUIRY_STATUS_CHOICES = [
    ("new", "New — not yet contacted"),
    ("called", "Called"),
    ("confirmed", "Order Confirmed"),
    ("not_interested", "Not Interested / Closed"),
]


class Enquiry(models.Model):
    """
    A farmer selects a product, enters quantity + the price they are willing
    to pay (their bid), and phone number. Staff see this in admin, sorted by
    newest first, and call the farmer to close the deal.
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="enquiries")

    customer_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    village_or_address = models.CharField(max_length=200, blank=True)

    quantity = models.PositiveIntegerField()
    bid_price_per_unit = models.DecimalField(
        max_digits=10, decimal_places=2,
        help_text="Price per unit the customer is offering to pay")

    message = models.TextField(blank=True, help_text="Any extra note the customer typed")

    status = models.CharField(max_length=20, choices=ENQUIRY_STATUS_CHOICES, default="new")
    staff_notes = models.TextField(blank=True, help_text="Internal notes — call outcome, follow-up date, etc.")

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name_plural = "Enquiries (Bids)"

    def __str__(self):
        return f"{self.customer_name} — {self.product.name_en} x{self.quantity}"

    @property
    def total_bid_value(self):
        return self.quantity * self.bid_price_per_unit
