from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SiteSettings, ContactMessage
from .serializers import SiteSettingsSerializer, ContactMessageSerializer


@api_view(["GET"])
def site_settings_view(request):
    obj = SiteSettings.load()
    return Response(SiteSettingsSerializer(obj, context={"request": request}).data)


class ContactMessageCreateView(generics.CreateAPIView):
    """Public: the homepage 'write to us' form posts here."""
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]
