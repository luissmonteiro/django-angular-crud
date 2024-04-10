import json
from django.shortcuts import render
from django.http import JsonResponse
from .services import PessoaService
from .dtos import PessoaDTO

def serializeData(pessoa):
    pessoa_json = {'id': pessoa.id, 'nome': pessoa.nome, 'data_nasc': pessoa.data_nasc, 'cpf': pessoa.cpf, 'sexo': pessoa.sexo,
                   'altura': pessoa.altura, 'peso': pessoa.peso, 'active': pessoa.active}
    return pessoa_json


def createPessoa(request):
    data = json.loads(request.body)

    pessoa_dto = PessoaDTO(data)

    pessoa_service = PessoaService()
    pessoa_criada = pessoa_service.createPessoa(pessoa_dto) 
    return JsonResponse(serializeData(pessoa_criada), safe=False)


def getListagemPessoas(request):
    pessoa_service = PessoaService()
    pessoas = pessoa_service.getListagemPessoas()
    pessoas_json = [serializeData(pessoa) for pessoa in pessoas]
    return JsonResponse(pessoas_json, safe=False)

def getPessoaById(request, id):
    pessoa_service = PessoaService()
    pessoa = pessoa_service.getPessoaById(id)
    return JsonResponse(serializeData(pessoa), safe=False)

def getPessoasBySearch(request, name):
    pessoa_service = PessoaService()
    pessoas = pessoa_service.getPessoasBySearch(name)
    return JsonResponse([serializeData(pessoa) for pessoa in pessoas], safe=False)

def updatePessoaById(request, id):
    pessoa_service = PessoaService()
    data = json.loads(request.body)
    pessoa = pessoa_service.updatePessoaById(id,data)
    return JsonResponse(serializeData(pessoa), safe=False)

def deletePessoaById(request, id):
    pessoa_service = PessoaService()
    pessoa = pessoa_service.deletePessoaById(id)
    return JsonResponse(serializeData(pessoa), safe=False)
