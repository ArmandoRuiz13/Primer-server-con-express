const express = require('express')
const app = express()
const port = 3000 //localhost definido por nosotros 

//documentacion de express, request y un reponsive
app.get('/',(req,res) =>{
    res.send("Hola a todos!")
})
app.get('/launchx',(req,res) =>{
    res.send("Ahora estoy en lauchX")
})
//Regresando un objeto
app.get('/explorersInNode',(req,res) => {
    const explorer = {name: "Explorer", msg: "Hellow"}
    res.send(explorer)
})
// Query params: recibe parametros por la url
// Ejemplo http://localhost:3000/explorers/armando  | Muestra {"explorerName":"armando"}
app.get('/explorers/:explorerName', (req,res) => {
    res.send(req.params)
})
app.listen(port,() => {
    console.log("Server Listo!")
})