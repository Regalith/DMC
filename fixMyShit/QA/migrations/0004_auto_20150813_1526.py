# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('QA', '0003_auto_20150813_1422'),
    ]

    operations = [
        migrations.RenameField(
            model_name='answer',
            old_name='answerText',
            new_name='answer_text',
        ),
        migrations.RenameField(
            model_name='answer',
            old_name='selectedAnswer',
            new_name='selected_answer',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='detailText',
            new_name='detail_text',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='pubDate',
            new_name='pub_date',
        ),
    ]
