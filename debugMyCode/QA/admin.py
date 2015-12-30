from django.contrib import admin
from models import Question, Language, Program, Framework
# Register your models here.





class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'detail_text', 'views', 'bounty', 'answers', 'is_answered', 'language', 'program', 'framework', 'owner')



admin.site.register(Question, QuestionAdmin)
admin.site.register(Language)
admin.site.register(Program)
admin.site.register(Framework)
