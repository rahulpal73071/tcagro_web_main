from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/settings/', include('core.urls')),
    path('api/products/', include('products.urls')),
    path('api/locations/', include('farms.urls')),
]

admin.site.site_header = "Tiera & Cielo Agro — Admin"
admin.site.site_title = "T&C Agro Admin"
admin.site.index_title = "Manage Website Content"

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
