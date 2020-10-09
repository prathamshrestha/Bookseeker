from django.db import models

def upload_path(instance, filename):
    return '/'.join(['bookpic',str(instance.name), filename])

class booksell_model(models.Model):
    name=models.CharField(max_length=50)
    bookpicture=models.ImageField(blank=True, upload_to=upload_path)
    age = models.IntegerField(blank=True)
    description=models.CharField(max_length=500)
    status=models.DateField(blank=True)


    def __str__(self):
        return self.name