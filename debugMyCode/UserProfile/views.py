from .serializers import UserProfileSerializer
from rest_framework import generics
from models import UserProfile

class UserProfileDetailView(generics.RetrieveDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer