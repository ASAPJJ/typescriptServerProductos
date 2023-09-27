import express from 'express'
const app = express();

app.get('/ping', (req,res)=>{
    console.log('pingeaste jojo')
    res.send('pong')
})

app.listen (3000,()=>{
    'Servidor escuchando en el puerto 3000'
})