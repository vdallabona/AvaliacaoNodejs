class ServicesOperacoes {

    Soma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos os valores devem ser números')
        }
        const resultado = Number((Number(num1) + Number(num2)).toFixed(2))
        return resultado
    }

    Subtracao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos os valores devem ser números')
        }
        const resultado = Number((Number(num1) - Number(num2)).toFixed(2))
        return resultado
    }

    Multiplicacao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos os valores devem ser números')
        }
        const resultado = Number((Number(num1) * Number(num2)).toFixed(2))
        return resultado
    }

    Divisao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos os valores devem ser números')
        }
        const resultado = Number((Number(num1) / Number(num2)).toFixed(2))
        return resultado
    }

    Raiz(num1) {
        if (isNaN(num1)) {
            throw new Error('Apenas números possuem raiz quadrada')
        }
        const resultado = Math.sqrt(num1)
        return resultado
    }

    Potencia(num1, num2) {
        if (isNaN(num1)) {
            throw new Error('Aceitamos apenas números')
        }
        const resultado = num1 ** num2
        return resultado
    }
}

module.exports = new ServicesOperacoes()