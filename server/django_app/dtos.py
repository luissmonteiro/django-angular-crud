class PessoaDTO:
    def __init__(self, data):
        self.nome = data.get("nome")
        self.data_nasc = data.get("data_nasc")
        self.cpf = data.get("cpf")
        self.sexo = data.get("sexo")
        self.altura = data.get("altura")
        self.peso = data.get("peso")
        self.id = data.get("id")