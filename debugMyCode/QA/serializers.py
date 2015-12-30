from rest_framework import serializers
from models import Question


class QuestionSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Question
        fields = ('id', 'title', 'detail_text', 'views', 'bounty', 'answers', 'is_answered', 'language', 'program', 'framework', 'owner')


class FilterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('language', 'program', 'framework', 'min_bounty', 'is_answered')