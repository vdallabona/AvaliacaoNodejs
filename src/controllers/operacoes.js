const ServicesOperacoes = require('../Services/operacoes')

class ControllersOperacoes {

    Soma(req, res) {
        try {
            const resultado = ServicesOperacoes.Soma(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }
    
    Subtracao(req, res) {
        try {
            const resultado = ServicesOperacoes.Subtracao(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Multiplicacao(req, res) {
        try {
            const resultado = ServicesOperacoes.Multiplicacao(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Divisao(req, res) {
        try {
            const resultado = ServicesOperacoes.Divisao(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }
    
    Raiz(req, res) {
        try {
            const resultado = ServicesOperacoes.Raiz(req.body.num1)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }
    
    Potencia(req, res) {
        try {
            const resultado = ServicesOperacoes.Potencia(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }
}

module.exports = new ControllersOperacoes()