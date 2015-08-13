from django.db import models

# Create your models here.


class Question(models.Model):
    title = models.CharField(default='empty', max_length=100)
    detailText = models.CharField(max_length=500)
    pubDate = models.DateTimeField('date published')

    def __str__(self):              # __unicode__ on Python 2
        return self.title


class Answer(models.Model):
    question = models.ForeignKey(Question)
    answerText = models.CharField(max_length=200)
    selectedAnswer = models.BooleanField(default=0)

    def __str__(self):              # __unicode__ on Python 2
        return self.choiceText