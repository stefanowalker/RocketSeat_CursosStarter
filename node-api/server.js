const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
app.use(express.json()); // permitir que envie dados no formato json
app.use(cors()); // liberada para acesso remotamente

// Iniciando o DB
mongoose.connect (
    "mongodb://localhost:27017/nodeapi", 
    {useNewUrlParser: true}
);
requireDir("./src/models"); 
//const Product = mongoose.model("Product"); // removido, após separar model de rotas

// Rotas
app.use("/api", require("./src/routes")); // aceita todas requisicoes
// "/" é a raiz do diretório url
// req é a requisicao ao servidor (parâmtros, corpo, usuário, autenticação, ip...)
// res é a resposta

app.listen(3001); // para aplicação ouvir a porta 3001