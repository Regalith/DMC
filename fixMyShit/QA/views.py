from django.shortcuts import get_object_or_404, render
from .models import Question, Language, Framework, Program
from django.views import generic
from .forms import AskQuestionForm, FilterResultsForm
from django.http import HttpResponseRedirect
from django.core.exceptions import ImproperlyConfigured
from django.core.urlresolvers import reverse
from django.db.models.query import QuerySet
from django.utils import six
from django.http import Http404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic.list import MultipleObjectMixin

import logging

class IndexView(generic.ListView):
    template_name = 'QA/index.html'
    context_object_name = 'latest_question_list'
    model = Question
    paginate_by = 15
    queryset = Question.objects.all().order_by('-modified')

    '''filter class variables
       must be null to skip all SQL intersects
    '''
    language = None
    program = None
    framework = None
    minBounty = None
    answered = None

    '''for shitty debugging purposes'''
    logger = logging.getLogger(__name__)

    def get(self, request, *args, **kwargs):
        self.object_list = self.get_queryset()
        allow_empty = self.get_allow_empty()

        if not allow_empty:
            # When pagination is enabled and object_list is a queryset,
            # it's better to do a cheap query than to load the unpaginated
            # queryset in memory.
            if (self.get_paginate_by(self.object_list) is not None
                    and hasattr(self.object_list, 'exists')):
                is_empty = not self.object_list.exists()
            else:
                is_empty = len(self.object_list) == 0
            if is_empty:
                raise Http404(_("Empty list and '%(class_name)s.allow_empty' is False.")
                        % {'class_name': self.__class__.__name__})

        context = self.get_context_data()
        return self.render_to_response(context)

    def post(self, request, *args, **kwargs):
        self.object_list = self.get_queryset()

        if request.method == 'POST':
            form = FilterResultsForm(request.POST)

            if form.is_valid():
                '''take cleaned data and create a new Question object to add'''''
                self.language = form.cleaned_data['language']
                self.framework = form.cleaned_data['framework']
                self.program = form.cleaned_data['program']
                self.minBounty = form.cleaned_data['bounty']
                self.answered = form.cleaned_data['answered']

        context = self.get_context_data()
        return self.render_to_response(context)

    def get_context_data(self, **kwargs):
        """
        Get the context for this view.
        """
        queryset = kwargs.pop('object_list', self.object_list)

        """
        Chain intersect filters
        """
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
            minBountys = Question.objects.filter(bounty__gte=self.minBounty)
            queryset = queryset & minBountys

        self.logger.error(self.answered)

        if self.answered:
            if self.answered == 'Yes':
                answers = Question.objects.filter(isAnswered=True)
                queryset = queryset & answers

            if self.answered == 'No':
                answers = Question.objects.filter(isAnswered=False)
                queryset = queryset & answers



        languageList = Language.objects.order_by('title')
        programList = Program.objects.order_by('title')
        frameworkList = Framework.objects.order_by('title')


        page_size = self.get_paginate_by(queryset)
        context_object_name = self.get_context_object_name(queryset)
        if page_size:
            paginator, page, queryset, is_paginated = self.paginate_queryset(queryset, page_size)
            context = {
                'paginator': paginator,
                'page_obj': page,
                'is_paginated': is_paginated,
                'object_list': queryset,
                'languages': languageList,
                'programs': programList,
                'frameworks': frameworkList,
            }
        else:
            context = {
                'paginator': None,
                'page_obj': None,
                'is_paginated': False,
                'object_list': queryset,
                'languages': languages,
                'programs': programs,
                'frameworks': frameworks
            }
        if context_object_name is not None:
            context[context_object_name] = queryset
        context.update(kwargs)
        return super(MultipleObjectMixin, self).get_context_data(**context)


class QuestionView(generic.DetailView):
    model = Question
    template_name = 'QA/question.html'


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    question.views += 1
    question.save()
    return render(request, 'QA/question.html', {'question': question})


def ask_question(request):
    if request.method == 'POST':

        #create and populate django form instance (bound form)
        form = AskQuestionForm(request.POST)

        if form.is_valid():
            #take cleaned data and create a new Question object to add
            title = form.cleaned_data['title']
            detail_text = form.cleaned_data['detail_text']

            question = Question.objects.create(title=title, detail_text=detail_text)

            return HttpResponseRedirect(reverse('QA:question', kwargs={'pk': question.id}))
    else:
        form = AskQuestionForm()

    return render(request, 'QA/askQuestion.html', {'form': form})

