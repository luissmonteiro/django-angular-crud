**Resumo da Aplicação:**

Esta aplicação é uma aplicação de exemplo que utiliza uma arquitetura cliente-servidor, onde o servidor é implementado em Django, o cliente em Angular e os dados são armazenados em um banco de dados PostgreSQL. A aplicação permite realizar operações CRUD (Create, Read, Update, Delete) em uma entidade de "Pessoa".

- **Servidor Django:**
  - O servidor Django atua como o backend da aplicação, fornecendo uma API RESTful para interagir com os dados da entidade "Pessoa".
  - Ele utiliza modelos Django para definir a estrutura de dados da entidade "Pessoa" e manipula esses dados por meio de views, serializers e URLs.
  - As views recebem solicitações HTTP, processam os dados e retornam respostas em formato JSON.
  - Os endpoints da API RESTful fornecem funcionalidades como listagem, criação, atualização e exclusão de pessoas.

- **Cliente Angular:**
  - O cliente Angular atua como o frontend da aplicação, consumindo a API RESTful fornecida pelo servidor Django.
  - Ele renderiza a interface do usuário e fornece funcionalidades para o usuário interagir com os dados de "Pessoa".
  - Ele faz solicitações HTTP para os endpoints da API RESTful do Django para realizar operações CRUD em pessoas.
  - Ele exibe uma lista de pessoas, permite adicionar novas pessoas, editar informações existentes e excluir pessoas.

- **Banco de Dados PostgreSQL:**
  - O banco de dados PostgreSQL armazena os dados das pessoas.
  - Ele é acessado pelo servidor Django para ler e escrever dados da entidade "Pessoa".
  - No momento está configurado para acessar a porta 5433. Caso seu banco esteja utilizando a porta default, altere no arquivo "settings.py", a variável "PORT" para 5433

**Instruções para Execução:**

1. **Configuração do Ambiente:**
   - Certifique-se de ter o Python e o Node.js instalados em seu sistema.
   - Instale o Django e o Angular CLI globalmente, se ainda não tiver instalado:

     ```
     pip install django
     npm install -g @angular/cli
     ```

2. **Clonar o Repositório:**
   Clone este repositório em seu ambiente local:

   ```
   git clone https://github.com/luissmonteiro/django-angular-crud.git
   ```

3. **Configuração do Servidor Django:**
   - Navegue até o diretório do servidor Django:

     ```
     cd django-angular-crud/django-backend
     ```

   - Execute as migrações do Django para criar as tabelas do banco de dados:

     ```
     python manage.py migrate
     ```

   - Inicie o servidor Django:

     ```
     python manage.py runserver
     ```

4. **Configuração do Cliente Angular:**
   - Em um novo terminal, navegue até o diretório do cliente Angular:

     ```
     cd django-angular-crud/angular-frontend
     ```

   - Instale as dependências do Angular:

     ```
     npm install
     ```

   - Inicie o servidor de desenvolvimento do Angular:

     ```
     ng serve
     ```

5. **Acessar a Aplicação:**
   - Abra o navegador e acesse `http://localhost:4200/` para visualizar a aplicação Angular.

Agora você tem a aplicação em execução, com o servidor Django fornecendo a API RESTful e o cliente Angular interagindo com ela para fornecer uma interface de usuário dinâmica e interativa.
