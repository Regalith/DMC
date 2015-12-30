from django.shortcuts import render, Http404
from .models import Question, Language, Framework, Program
from .serializers import QuestionSerializer, FilterSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.permissions import AllowAny


class AllQuestionsView(generics.ListAPIView):
    queryset = Question.objects.all().order_by('-modified')
    serializer_class = QuestionSerializer

    permission_classes = (AllowAny,)

    language = None
    program = None
    framework = None
    minBounty = None
    answered = None

    filtered = False

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = FilterSerializer(data=request.POST);

        if serializer.is_valid():
            self.language = serializer.object.language;
            self.program = serializer.object.program;
            self.framework = serializer.object.framework;
            self.minBounty = serializer.object.min_bounty;
            self.answered = serializer.object.is_answered;

        self.queryset = Question.objects.all().order_by('-modified')

        self.queryset = self.custom_filter(self.queryset)

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


class QuestionDetailView(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_object(self, pk):
        try:
            return Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        question = self.get_object(pk)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)


class AskQuestionView(generics.CreateAPIView):
    serializer_class = QuestionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


