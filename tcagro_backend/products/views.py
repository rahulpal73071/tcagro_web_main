from rest_framework import generics, permissions
from .models import Category, Product, Enquiry
from .serializers import CategorySerializer, ProductSerializer, EnquiryCreateSerializer


class CategoryListView(generics.ListAPIView):
    """Public: list categories for the products filter bar."""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]


class ProductListView(generics.ListAPIView):
    """Public: list available products, optionally filtered by ?category=<id>."""
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        qs = Product.objects.filter(is_available=True).select_related("category")
        category_id = self.request.query_params.get("category")
        if category_id:
            qs = qs.filter(category_id=category_id)
        return qs


class ProductDetailView(generics.RetrieveAPIView):
    """Public: single product page."""
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]


class EnquiryCreateView(generics.CreateAPIView):
    """
    Public: a farmer submits quantity + their bid price for a product.
    No authentication needed — this is the "select, enter quantity & price,
    we call you" flow described in the product brief.
    """
    queryset = Enquiry.objects.all()
    serializer_class = EnquiryCreateSerializer
    permission_classes = [permissions.AllowAny]
