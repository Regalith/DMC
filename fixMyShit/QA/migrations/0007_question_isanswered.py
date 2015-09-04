# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('QA', '0006_auto_20150826_1155'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='isAnswered',
            field=models.BooleanField(default=0),
        ),
    ]
