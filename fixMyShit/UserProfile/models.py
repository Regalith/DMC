from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class UserProfile(models.Model):
    user = models.OneToOneField(User)
    joinDate = models.DateTimeField(default=timezone.now)

    rating = models.IntegerField(default=0)
    posts = models.IntegerField(default=0)
    answeredQuestions = models.IntegerField(default=0)

    def __str__(self):
        return self.user;