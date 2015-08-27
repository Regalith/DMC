# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('QA', '0005_auto_20150813_1737'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='answers',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='question',
            name='bounty',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='question',
            name='views',
            field=models.IntegerField(default=0),
        ),
    ]
