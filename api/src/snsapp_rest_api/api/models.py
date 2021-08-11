from django.db import models

# Create your models here.
class Items(models.models):
    name = models.CharField(max_length=32)
    collection_day = models.CharField(max_length=32)
    date = models.DateTimeField()
    description = models.TextField()
    link = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
