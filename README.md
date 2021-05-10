## 🎯 Sobre

Cadastre usuários, alugue  e devolva filmes nessa api de locadora.


## 🚀 Tecnologias

- Sequelize
- Node js
- Express
- Jest
- PostgreSQL

## ✅ Requisitos

Antes de iniciar, você precisa ter [Git](https://git-scm.com), [Node](https://nodejs.org/en/) e [PostgreSQL](https://www.postgresql.org/) instalados.

## Iniciando o projeto
```bash
$ git clone https://github.com/Lukenoutte/locadora-api.git
```

### 

```bash
$ cd locadora-api
$ npm install
```
* Entre no diretorio **_locadora-api/src/config_** no arquivo __"database.js"__ altere os campos __username e password__, colocando os dados usados na instalação do PostgreSQL. Obs: username padrão é "postgres".

## Banco de dados

```bash
$ yarn sequelize db:create     # Crie o banco de dados.
$ yarn sequelize db:migrate    # Crie as tabelas.
$ yarn sequelize db:seed:all   # Alimente banco de dados com dados falsos.
```

```bash
$ yarn start
# The server will initialize in the <http://localhost:3333>
```
## 📃 Como usar?

❗ Para rotas que necessitam de login, use o __token__ gerado ao autenticar na rota "/users/login"  em um campo no header chamado __"authorization"__ com o a palavra __Bearer__ antecedendo.
```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxjE0OTYxMjA1LCJleHAiOjE2MTUwNDc2MDV9
```
##  Criar novo usuário

Rota: /users <br />
Método: POST <br />
Requisitos: name, email, password

```bash
{
	"name": "Maria Santos",
	"email": "maria6@hotmail.com",
	"password": "1234"
}
```

##  Login


Rota: /users/login <br />
Método: POST <br />
Requisitos: email, password

```bash
{
	"email": "maria6@hotmail.com",
	"password": "1234"
}
```


## Visualizar filmes disponiveis


Rota: /movies <br />
Método: GET <br />

##  Pesquisar filme pelo nome


Rota: /movies/search?title= <br />
Método: GET <br />
Requisitos: title

```bash
http://localhost:3333/movies/search?title=cidade%20de%20deus
```
obs: Use "%20" insted of space.

##  Cadastrar um filme


Rota: /movies <br />
Método: POST <br />
Requisitos: title, director, quantity <br />
❗ __Login Obrigatório__ 

```bash
{
	"title": "Matrix",
	"director": "The Wachowski Brothers",
	"quantity": "2"
}
```

##  Alugar um filme


Rota: /rents <br />
Método: POST <br />
Requisitos: user_id, movie_id <br />
❗ __Login Obrigatório__ 

```bash
{
	"user_id": 1,
	"movie_id": 1
}
```

##  Devolver filme


Rota: /rents/give-back/:rentId <br />
Método: PATCH <br />
Requisitos: rent_id <br />
❗ __Login Obrigatório__ 

```bash
	http://localhost:3333/rents/give-back/1
```

## 🔧 Tests

```bash
$ npm test
```
