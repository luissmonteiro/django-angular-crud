from .models import Pessoa
from rest_framework import status
from rest_framework.response import Response
from django.core import serializers
import json
from django.http import JsonResponse
from django.db.models import Q


class PessoaTask:
    def createPessoa(self, pessoa_dto):
        if(pessoa_dto.id):
            nova_pessoa = Pessoa(id=pessoa_dto.id, nome=pessoa_dto.nome,
                                                    data_nasc=pessoa_dto.data_nasc,
                                                    cpf=pessoa_dto.cpf,
                                                    sexo=pessoa_dto.sexo,
                                                    altura=pessoa_dto.altura,
                                                    peso=pessoa_dto.peso) 
            nova_pessoa.save()
        else:  
            nova_pessoa = Pessoa.objects.create(nome=pessoa_dto.nome,
                                                    data_nasc=pessoa_dto.data_nasc,
                                                    cpf=pessoa_dto.cpf,
                                                    sexo=pessoa_dto.sexo,
                                                    altura=pessoa_dto.altura,
                                                    peso=pessoa_dto.peso)
        return nova_pessoa
    
    def getListagemPessoas(self):
        pessoas = Pessoa.objects.filter(active=True)
        return pessoas
    
    def getPessoaById(self, id):
        pessoa = Pessoa.objects.get(id=id)
        return pessoa
    
    def getPessoasBySearch(self, name):
        pessoas = Pessoa.objects.filter((Q(nome__icontains=name) |
                         Q(cpf__icontains=name))).filter(active=True)
        return pessoas

    def updatePessoaById(self, id, pessoa_dto):
        try:
            pessoa = Pessoa.objects.get(id=id)
        except:
            return self.throwError('Pessoa não encontrada.')
        if 'nome' in pessoa_dto:
            pessoa.nome = pessoa_dto['nome']
        if 'data_nasc' in pessoa_dto:
            pessoa.data_nasc = pessoa_dto['data_nasc']
        if 'cpf' in pessoa_dto:
            pessoa.cpf = pessoa_dto['cpf']
        if 'sexo' in pessoa_dto:
            pessoa.sexo = pessoa_dto['sexo']
        if 'altura' in pessoa_dto:
            pessoa.altura = pessoa_dto['altura']
        if 'peso' in pessoa_dto:
            pessoa.peso = pessoa_dto['peso']
        pessoa.save()
        return pessoa
    

    def deletePessoaById(self, id):
        try:
            pessoa = Pessoa.objects.get(id=id)
            pessoa.active = False
            pessoa.save()
            return pessoa
        except:
            return self.throwError('Pessoa não encontrada.')
    
    def throwError(self, message):
        return JsonResponse({'error': message}, status=status.HTTP_400_BAD_REQUEST)