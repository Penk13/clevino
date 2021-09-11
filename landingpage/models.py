from django.db import models


class LandingUser(models.Model):
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email
