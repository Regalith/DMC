# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('QA', '0002_question_title'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='questionText',
            new_name='detailText',
        ),
    ]
