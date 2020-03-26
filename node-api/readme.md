# Node-API
Trata-se de uma API simples para [CRUD](https://pt.wikipedia.org/wiki/CRUD) construída utilizando **Node.js** com **MongoDB**, com uso do paradigma MVC.

# Passo a passo do Desenvolvimento | Instalação: 

Para instalar dependências dentro da pasta da aplicação:
```sh
$ npm init -y
```

Para poder manipular rotas e views:
```sh
$ npm install express
```

Desenvolvimento:
- Abrir o diretorio corrente no VScode

Depois de editar o arquivo server.js, executar:
```sh
$ node server.js
```

Instalar o nodemon para evitar ter que reiniciar o server:
```sh
$ npm install -D nodemon
```
-D é dependencias de desenvolvimento

Adicionar no arquivo package.js:
>  "scripts": {
    "dev": "nodemon server.js"

Depois:
```sh
$ npm run dev 
```
// em vez de executar 'node server.js' (permite que não precise reiniciar toda vez).

-----------------------------------------------------

-Baixar docker
-Instalar mongodb
Depois:
```sh
$ docker pull mongo
$ docker run --name mongodb -p 27017:27017 -d mongo
```
// minha máquina : porta do mongo
// -d mongo = a partir da minha imagem mongo

-Baixar o robotmongo

Instala um ORM de banco nao relacional do banco mongodb
```sh
$ npm install mongoose
```

Add o aquivo: 
> /src/models/Product

Add ao server.js:
> RequireDir('./src/models/Product');

Instala o require-dir
```sh
$ npm install require-dir
```

---------------------------------------
add controler e router

------------------------------------
Dicas para facilitar testes:
-Baixar Insominia
-Configura do get  e o post

------------------
Configura para aceitar o método POST na aplicacao

---------
Paginação:
```sh
$ npm install mongoose-paginate 
```

------------
Instalar o CORS
```sh
$ npm install cors
```




