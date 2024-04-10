from .tasks import PessoaTask

class PessoaService:
    def createPessoa(self, pessoa_dto):
        pessoa_task = PessoaTask.createPessoa(self,pessoa_dto)
        return pessoa_task
    
    def getListagemPessoas(self):
        pessoa_task = PessoaTask()
        pessoas = pessoa_task.getListagemPessoas()
        return pessoas
    
    def getPessoaById(self, id):
        pessoa_task = PessoaTask()
        pessoa = pessoa_task.getPessoaById(id)
        return pessoa
    
    def getPessoasBySearch(self, name):
        pessoa_task = PessoaTask()
        pessoas = pessoa_task.getPessoasBySearch(name)
        return pessoas
    
    def updatePessoaById(self, id, pessoa_dto):
        pessoa_task = PessoaTask()
        pessoa = pessoa_task.updatePessoaById(id, pessoa_dto)
        return pessoa
    
    def deletePessoaById(self, id):
        pessoa_task = PessoaTask()
        pessoa = pessoa_task.deletePessoaById(id)
        return pessoa