from rest_framework import serializers

from .models import LandingUser


class LandingUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingUser
        fields = ['id', 'email', 'message']
