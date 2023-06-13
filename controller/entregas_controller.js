const entregas= [
    {   "id" : 1,
        "Remetente": "João",
        "Destinatario":"Maria",
        "Endereço": "Rua do arvoredo,123",
        "Dt_envio": "22-05-2023"
    },
    {   "id" : 2,
        "Remetente": "Carlos",
        "Destinatario":"Maria",
        "Endereço": "Rua do arvoredo,123",
        "Dt_envio": "22-05-2023"
    }
]

/*Buscar Entregas*/
function listar (req, res){
    res.json(entregas)
}

function buscarEntrega(id){
    return entregas.findIndex(entrega => entrega.id == id )
}

/*buscar por ID*/
function buscarPorId(req, res){
    try{
        let index = buscarEntrega(req.params.id);
        res.json(entregas[index])

    }catch{
        res.status(404).json("Erro: Entrega nao encontrada.")
    }

}
/*Add Entregas*/
function inserirEntregas(req,res){
    try {
        entregas.push(req.body);
        res.status(201).send("Entrega cadastrada com sucesso")
    }catch{
        res.status(400).json("Erro: Os parametros da entrega estao invalidos")
    }
}
/* Alterar Entregas*/
function alterarEntrega (req,res){
    try{
        let index = buscarEntrega(req.params.id);
        entregas[index].Remetente = req.body.Remetente;
        entregas[index].Destinatario = req.body.Destinatario;
        entregas[index].Endereço = req.body.Endereço;
        entregas[index].Dt_envio = req.body.Dt_envio;
        res.json(entregas);
    }catch{
        res.status(400).json("Erro: Os parametros da entrega estao invalidos")

    }
}
/* Excluir Entregas*/
function deletarEntregas(req,res){
    try{
        let {id} = req.params;
        let index = buscarEntrega(id);
        entregas.splice(index,1);
        res.send(`Entrega com id = ${id} removida com sucesso`)

    }catch{
        res.status(404).json("Erro: Entrega nao encontrada.")

    }
}

module.exports = {
    listar,
    buscarPorId,
    inserirEntregas,
    alterarEntrega,
    deletarEntregas,
}

    
    