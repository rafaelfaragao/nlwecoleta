const express = require("express")

const server = express()

//configurar caminhos(rotas) da minha aplicação
//página inicial
//req : requisição
//res : resposta

server.get("/", (req,res) =>{
    res.send("Cheguei aqui")
})

//ligar o servidor
server.listen(3000)

