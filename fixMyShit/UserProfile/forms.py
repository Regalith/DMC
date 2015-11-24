from django import forms
from UserProfile.models import UserProfile
from django.contrib.auth.models import User


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile


class UserForm(forms.ModelForm):

    password = forms.CharField(widgets=forms.PasswordInput())

    class Meta:
        model = User
        fields = ('username', 'email', 'password')