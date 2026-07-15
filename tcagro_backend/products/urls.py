from django.urls import path
from .views import CategoryListView, ProductListView, ProductDetailView, EnquiryCreateView

urlpatterns = [
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path("", ProductListView.as_view(), name="product-list"),
    path("<int:pk>/", ProductDetailView.as_view(), name="product-detail"),
    path("enquiries/", EnquiryCreateView.as_view(), name="enquiry-create"),
]
