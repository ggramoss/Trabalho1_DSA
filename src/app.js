import express from "express";

const app = express();

app.use(express.json())
const entregas= [
    {id : 1,
        "Remetente": "João",
        "Destinatario":"Maria",
        "Endereço": "Rua do arvoredo,123",
        "Dt_envio": "22-05-2023"
    },
    {id : 2,
        "Remetente": "Carlos",
        "Destinatario":"Maria",
        "Endereço": "Rua do arvoredo,123",
        "Dt_envio": "22-05-2023"
    }
]

app.get('/',(req,res) => {
    res.status(200).send('Bem Vindo ao sistema de entregas');
})

/*Buscar Entregas*/
app.get('/entregas',(req,res) => {
    res.status(200).json (entregas);
})

/*buscar por ID*/
app.get('/entregas/:id',(req,res) => {
    let index = buscarEntrega(req.params.id);
    res.json(entregas[index])
})

/*Add Entregas*/
app.post('/entregas',(req,res) => {
    entregas.push(req.body);
    res.status(201).send("Entrega cadastrada com sucesso")
})

/* Alterar Entregas*/
app.put('/entregas/:id',(req,res) => {
    let index = buscarEntrega(req.params.id);
    entregas[index].Remetente = req.body.Remetente;
    entregas[index].Destinatario = req.body.Destinatario;
    entregas[index].Endereço = req.body.Endereço;
    entregas[index].Dt_envio = req.body.Dt_envio;
    res.json(entregas);
})
/* Excluir Entregas*/
app.delete('/entregas/:id', (req,res) => {
    let {id} = req.params;
    let index = buscarEntrega(id);
    entregas.splice(index,1);
    res.send(`Entrega com id = ${id} removida com sucesso`)

})


function buscarEntrega(id){
    return entregas.findIndex(entrega => entrega.id == id )
}



export default app