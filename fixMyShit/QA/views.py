from django.shortcuts import render
from .models import Question
from django.views import generic
from .forms import AskQuestionForm
from django.http import HttpResponseRedirect
from django.utils import timezone
from django.core.urlresolvers import reverse

# Create your views here.


class IndexView(generic.ListView):
    template_name = 'QA/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pubDate')[:5]


class QuestionView(generic.DetailView):
    model = Question
    template_name = 'QA/question.html'


def askQuestion(request):
    if request.method == 'POST':

        #create and populate django form instance (bound form)
        form = AskQuestionForm(request.POST)

        if form.is_valid():
            #take cleaned data and create a new Question object to add
            title = form.cleaned_data['title']
            detailText = form.cleaned_data['detailText']
            pubDate = timezone.now()

            question = Question.objects.create(title=title, detailText=detailText, pubDate=pubDate)

            return HttpResponseRedirect('QA:askQuestion')
    else:
        form = AskQuestionForm()

    return render(request, 'QA/askQuestion.html', {'form': form})




'''
class AskQuestionView(CreateView):
    model = Question
    template_name = 'QA/askQuestion.html'
    fields = ['title', 'questionText']


def index(request):
    latest_question_list = Question.objects.order_by('-pubDate')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'QA/index.html', context)


def question(request, questionId):
    questionObject = get_object_or_404(Question, pk=questionId)
    return render(request, 'QA/question.html', {'question': questionObject})


def createQuestion(title, qText):
    time = timezone.now() + datetime.timedelta()
    return Question.objects.create(question_text=qText, pub_date=time)
'''