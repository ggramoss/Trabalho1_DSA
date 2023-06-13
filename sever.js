const express = require('express');
const entregaRota = require ('./rotas/entregas_rotas')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).send('Bem Vindo ao sistema de entregas');
})

app.use('/entregas', entregaRota)


app.listen(port, () => {
    console.log('Sevidor executando em http://localhost:3000')
})
