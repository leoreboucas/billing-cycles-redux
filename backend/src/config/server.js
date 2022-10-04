const port = 3003;
 
const bodyParser = require('body-parser')
const express = require("express")
const server = express()
 
//Para toda requisição que chegar, usar body-parser para interpretar.
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
 
 
server.listen(port, function() {
    console.log(`Backend está rodando beleza na porta ${port}.`)
})
 
module.exports = server