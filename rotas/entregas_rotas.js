const express = require('express');
const entregaController = require('../controller/entregas_controller')

const router = express.Router();


//Recurso: Entregas- rota: /entregas
/*Buscar Entregas*/
router.get('/',entregaController.listar);
/*buscar por ID*/
router.get('/:id',entregaController.buscarPorId )
/*Add Entregas*/
router.post('/',entregaController.inserirEntregas);
/* Alterar Entregas*/
router.put('/:id',entregaController.alterarEntrega);
/* Excluir Entregas*/
router.delete('/:id',entregaController.deletarEntregas);

module.exports = router;



