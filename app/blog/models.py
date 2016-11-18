"""Module containing all the project models."""
from django.db import models


class BlogEntry(models.Model):
    title = models.CharField('Title', max_length=128)
    body = models.TextField('Body')
    created_on = models.DateTimeField('Created on', auto_now=True)


class EntryComment(models.Model):
    text = models.TextField('Text')
    created_on = models.DateTimeField('Created on', auto_now=True)
    author = models.CharField('Author username', max_length=128)
    entry = models.ForeignKey('BlogEntry', related_name='comments')

"""
class Example(models.Model):

    name = models.CharField('Name', max_length=64)
    parent = models.ForeignKey('self', related_name='children', null=True)
"""
