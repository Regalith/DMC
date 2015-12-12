from __future__ import unicode_literals

from django.db import models
from UserProfile.models import UserProfile
from django.utils import timezone


class Chat(models.Model):

    owner = models.ForeignKey(UserProfile, related_name='Owner')
    member = models.ForeignKey(UserProfile, related_name='Member')
    started = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.owner


class Message(models.Model):

    owner = models.ForeignKey(Chat)
    sent = models.DateTimeField(default=timezone.now)
    text = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.text
