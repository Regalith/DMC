from django.db import models

# Create your models here.


class TimeStampedModel(models.Model):
    """
    An abstract base class model that provides self-updating
    ``created`` and ``modified`` fields.
    """
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Question(TimeStampedModel):
    title = models.CharField(default='empty', max_length=100)
    detail_text = models.CharField(max_length=500)
    answers = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    bounty = models.FloatField(default=0)

    def __str__(self):              # __unicode__ on Python 2
        return self.title


class Answer(TimeStampedModel):
    question = models.ForeignKey(Question)
    answer_text = models.CharField(max_length=200)
    selected_answer = models.BooleanField(default=0)

    def __str__(self):              # __unicode__ on Python 2
        return self.choiceText


