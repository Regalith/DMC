from rest_framework import serializers
from models import Question


class QuestionSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Question
        fields = ('id', 'title', 'detail_text', 'views', 'bounty', 'is_answered', 'language', 'program', 'framework', 'owner')

