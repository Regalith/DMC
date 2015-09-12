from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Question)
admin.site.register(Language)
admin.site.register(Program)
admin.site.register(Framework)