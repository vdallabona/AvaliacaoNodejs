const express = require('express');
const ControllersOperacoes = require('../controllers/operacoes')

const router = express.Router()

router.post("/soma/", ControllersOperacoes.Soma)
router.post("/subtracao/", ControllersOperacoes.Subtracao)
router.post("/multiplicacao/", ControllersOperacoes.Multiplicacao)
router.post("/divisao/", ControllersOperacoes.Divisao)
router.post("/raiz/", ControllersOperacoes.Raiz)
router.post("/potencia/", ControllersOperacoes.Potencia)

module.exports = router;
