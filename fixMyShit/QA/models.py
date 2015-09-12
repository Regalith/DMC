from django.db import models
from datetime import datetime
# Create your models here.


class Language(models.Model):
    title = models.CharField(default='language', max_length=40)

    def __str__(self):              # __unicode__ on Python 2
        return self.title


class Program(models.Model):
    title = models.CharField(default='program', max_length=40)

    def __str__(self):              # __unicode__ on Python 2
        return self.title


class Framework(models.Model):
    title = models.CharField(default='framework', max_length=40)

    def __str__(self):              # __unicode__ on Python 2
        return self.title


class TimeStampedModel(models.Model):
    """
    An abstract base class model that provides self-updating
    ``created`` and ``modified`` fields.
    """
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(default=datetime.now())

    class Meta:
        abstract = True


class Question(TimeStampedModel):
    title = models.CharField(default='empty', max_length=100)
    detail_text = models.CharField(max_length=500)
    answers = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    bounty = models.FloatField(default=0)
    isAnswered = models.BooleanField(default=0)

    language = models.ForeignKey(Language, blank=True, null=True, related_name='language')
    program = models.ForeignKey(Program, blank=True, null=True, related_name='program')
    framework = models.ForeignKey(Framework, blank=True, null=True, related_name='framework')


    def __str__(self):              # __unicode__ on Python 2
        return self.title


class Answer(TimeStampedModel):
    question = models.ForeignKey(Question)
    answer_text = models.CharField(max_length=200)
    selected_answer = models.BooleanField(default=0)

    def __str__(self):              # __unicode__ on Python 2
        return self.choiceText




