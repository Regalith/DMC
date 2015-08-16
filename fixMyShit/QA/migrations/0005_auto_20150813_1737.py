# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('QA', '0004_auto_20150813_1526'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='pub_date',
        ),
        migrations.AddField(
            model_name='answer',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2015, 8, 13, 21, 36, 59, 312733, tzinfo=utc), auto_now_add=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='answer',
            name='modified',
            field=models.DateTimeField(default=datetime.datetime(2015, 8, 13, 21, 37, 9, 850783, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='question',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2015, 8, 13, 21, 37, 18, 505835, tzinfo=utc), auto_now_add=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='question',
            name='modified',
            field=models.DateTimeField(default=datetime.datetime(2015, 8, 13, 21, 37, 22, 488863, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
    ]
