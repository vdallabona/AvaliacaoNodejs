class ServicesOperacoes {

    Soma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }
        const resultado = Number((Number(num1) + Number(num2)).toFixed(2))
        return resultado
    }

    Subtracao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }
        const resultado = Number((Number(num1) - Number(num2)).toFixed(2))
        return resultado
    }

    Multiplicacao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }
        const resultado = Number((Number(num1) * Number(num2)).toFixed(2))
        return resultado
    }

    Divisao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
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
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }
        const resultado = num1 ** num2
        return resultado
    }
    
    Links(conta) {

        switch (conta) {
            case 'soma'||'+'||'mais'||'adição':
                return "O link para somar é: http://localhost:3000/soma/  -  O método é POST e ele pede dois valores numéricos, o  'num1' e o  'num2'.";
                break;
            case 'subtraçao' || 'diminuição' || 'menos' || '-':
                return "O link para somar é: http://localhost:3000/subtraçao/  -  O método é POST e ele pede dois valores numéricos, o  'num1' e o  'num2'.";
                break;
            case 'multiplicaçâo' || 'vezes' || 'x':
                return "O link para somar é: http://localhost:3000/multiplicaçao/  -  O método é POST e ele pede dois valores numéricos, o  'num1' e o  'num2'.";
                break;
            case 'divisao'|| '/':
                return "O link para somar é: http://localhost:3000/divisao/  -  O método é POST e ele pede dois valores numéricos, o  'num1' e o  'num2'.";
                break;
            case 'potência':
                return "O link para somar é: http://localhost:3000/potência/  -  O método é POST e ele pede dois valores numéricos, o  'num1' e o  'num2'.";
                break;
            case 'raiz':
                return "O link para somar é: http://localhost:3000/raiz/  -  O método é POST e ele pede um valores numéricos, o  'num1'.";
                break;
        
            default:
                return "As operações são Adição, Subtração, Divisão, Multiplicação, Raiz e Potência. ";
                break;
        }
    }
}

module.exports = new ServicesOperacoes()