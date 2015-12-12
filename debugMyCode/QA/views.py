from django.shortcuts import render
from .models import Question, Language, Framework, Program
from .serializers import QuestionSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import permissions
from .permissions import IsOwnerOrReadOnly
import logging


class AllQuestionsView(generics.ListAPIView):
    queryset = Question.objects.all().order_by('-modified')
    serializer_class = QuestionSerializer

    logger = logging.getLogger(__name__)

    language = None
    program = None
    framework = None
    minBounty = None
    answered = None

    filtered = False

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):

        self.queryset = Question.objects.all().order_by('-modified')

        return self.list(request, *args, **kwargs)

    def custom_filter(self, queryset):

        if self.language:
            lang_obj = Language.objects.filter(title=self.language)
            languages = Question.objects.filter(language__pk=lang_obj)
            queryset = queryset & languages

        if self.program:
            prog_obj = Program.objects.filter(title=self.program)
            programs = Question.objects.filter(program__pk=prog_obj)
            queryset = queryset & programs

        if self.framework:
            frame_obj = Framework.objects.filter(title=self.framework)
            frameworks = Question.objects.filter(framework__pk=frame_obj)
            queryset = queryset & frameworks

        if self.minBounty:
            min_bounty = Question.objects.filter(bounty__gte=self.minBounty)
            queryset = queryset & min_bounty

        if self.answered:
            if self.answered == 'Yes':
                answers = Question.objects.filter(is_answered=True)
                queryset = queryset & answers

            if self.answered == 'No':
                answers = Question.objects.filter(is_answered=False)
                queryset = queryset & answers

        return queryset


class QuestionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)


class AskQuestionView(generics.CreateAPIView):
    serializer_class = QuestionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


