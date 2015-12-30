# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-29 06:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('QA', '0005_auto_20151223_1850'),
    ]

    operations = [
        migrations.CreateModel(
            name='Filter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('min_bounty', models.FloatField(default=0)),
                ('is_answered', models.BooleanField(default=0)),
                ('framework', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='filter_framework', to='QA.Framework')),
                ('language', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='filter_language', to='QA.Language')),
                ('program', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='filter_program', to='QA.Program')),
            ],
        ),
    ]
