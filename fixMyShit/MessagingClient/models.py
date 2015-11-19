from django.db import models
from User.models import DMCUser
from django.utils import timezone

# Create your models here.


class Chat(models.Model):

    owner = models.ForeignKey(DMCUser, related_name='Owner')
    member = models.ForeignKey(DMCUser, related_name='Member')
    started = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.owner


class Message(models.Model):

    owner = models.ForeignKey(Chat)
    sent = models.DateTimeField(default=timezone.now)
    text = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.text
