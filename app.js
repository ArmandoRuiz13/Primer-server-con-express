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

app.listen(port,() => {
    console.log("Server Listo!")
})