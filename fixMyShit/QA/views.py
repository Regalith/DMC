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
        return Question.objects.order_by('-modified')[:15]


class QuestionView(generic.DetailView):
    model = Question
    template_name = 'QA/question.html'


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

