from django.db import models
from User.models import UserProfile
from django.utils import timezone

# Create your models here.


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
