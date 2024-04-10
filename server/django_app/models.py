from django.db import models

class Pessoa(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    data_nasc = models.DateField()
    cpf = models.CharField(max_length=11)
    sexo = models.CharField(max_length=1)
    altura = models.FloatField()
    peso = models.FloatField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.nome
