__author__ = 'Tim'
from django import forms


class AskQuestionForm(forms.Form):
    title = forms.CharField(label='Question', max_length=100)
    detail_text = forms.CharField(label='Details', max_length=500)