from rest_framework import serializers
from models import UserProfile
from QA.models import Question

class UserProfileSerializer(serializers.ModelSerializer):
    questions = serializers.PrimaryKeyRelatedField(many=True, queryset=Question.objects.all())

    class Meta:
        model = UserProfile
        fields = ('id' , 'username' , 'questions')
