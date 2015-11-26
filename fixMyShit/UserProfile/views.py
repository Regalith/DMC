from django.shortcuts import render
from UserProfile.forms import UserProfileForm, UserForm
from django.contrib.auth.models import User
from UserProfile.models import UserProfile
from django.utils import timezone
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect


def register(request):

    registered = False
    profile_form = UserProfileForm(request.POST)
    user_form = UserForm(request.POST)

    if request.method == 'POST':
        if profile_form.is_valid() and user_form.is_valid():
            user_name = user_form.cleaned_data['username']
            email = user_form.cleaned_data['email']
            password = user_form.cleaned_data['password']

            new_user = User.objects.create_user(user_name, email, password)
            new_user.save()

            new_profile = UserProfile.objects.create(user=new_user)
            new_profile.save()

            return HttpResponseRedirect(reverse('QA:index'))
    else:
        profile_form = UserProfileForm()
        user_form = UserForm()

    return render(request, 'UserProfile/register.html', {'user_form': user_form, 'profile_form': profile_form})


