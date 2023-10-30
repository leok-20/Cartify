from django.db import models

class Store(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)

class Category(models.Model):
    name = models.CharField(max_length=200)

class Item(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="category")
    price = models.DecimalField(decimal_places=2, max_digits=12)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name="Store")
