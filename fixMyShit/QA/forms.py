__author__ = 'Tim'
from django import forms


class AskQuestionForm(forms.Form):
    title = forms.CharField(label='Question', max_length=100)
    detail_text = forms.CharField(label='Details', max_length=500)


class FilterResultsForm(forms.Form):
    language = forms.CharField(label='Language', max_length=100, required=False)
    program = forms.CharField(label='Program', max_length=100, required=False)
    framework = forms.CharField(label='Framework', max_length=100, required=False)
    bounty = forms.FloatField(label='Bounty', required=False)
    answered = forms.CharField(label='Answered', max_length=100, required=False)