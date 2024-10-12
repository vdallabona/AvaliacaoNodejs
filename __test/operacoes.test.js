const Funcoes = require('../src/Services/operacoes')
const { describe, it, expect } = require('@jest/globals')

describe('testando a operação somar: ', () => {

    it('Somar dois números inteiros positivos', () => {
        const resultado = Funcoes.Soma(1, 2)
        expect(resultado).toBe(3)
    })

    it('Somar um número positivo inteiro e um negativo inteiro', () => {
        const resultado = Funcoes.Soma(3, -2)
        expect(resultado).toBe(1)
    })

    it('Somar um número negativo inteiro e um  positivo inteiro', () => {
        const resultado = Funcoes.Soma(-1, 2)
        expect(resultado).toBe(1)
    })

    it('Somar um número com resultado negativo inteiro', () => {
        const resultado = Funcoes.Soma(-4, 2)
        expect(resultado).toBe(-2)
    })

    it('Somar um número com resultado negativo inteiro em outra ordem', () => {
        const resultado = Funcoes.Soma(2, -4)
        expect(resultado).toBe(-2)
    })

    it('Somar um número e um 0', () => {
        const resultado = Funcoes.Soma(2 , 0)
        expect(resultado).toBe(2)
    })

    it('Somar um 0 e um número', () => {
        const resultado = Funcoes.Soma(0 , 2)
        expect(resultado).toBe(2)
    })

    it('Somar número e letra', () => {
        const funSomar = () => Funcoes.Soma(2 , 'a')
        expect(funSomar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Somar letra e número', () => {
        const funSomar = () => Funcoes.Soma('a' , 2)
        expect(funSomar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Somar número inteiro  e vazio', () => {
        const funSomar = () => Funcoes.Soma(2 , )
        expect(funSomar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })
    
    it('Receber apenas um número', () => {
        const funSomar = () => Funcoes.Soma(2)
        expect(funSomar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Somar números grandes positivos', () => {
        const resultado = Funcoes.Soma(20000000000 , 20000000000)
        expect(resultado).toBe(40000000000)
    })

    it('Somar números grandes negativos', () => {
        const resultado = Funcoes.Soma(-20000000000 , -20000000000)
        expect(resultado).toBe(-40000000000)
    })

    it('Somando dois zeros', () => {
        const resultado = Funcoes.Soma(0 , 0)
        expect(resultado).toBe(0)
    })

    it('Tendo zero ao somar números diferentes de zero', () => {
        const resultado = Funcoes.Soma(-4 , 4)
        expect(resultado).toBe(0)
    })

    it('Somando números decimais e resultado inteiro', () => {
        const resultado = Funcoes.Soma(3.5 , 3.5)
        expect(resultado).toBe(7)
    })

    it('Somando números decimais e resultado decimal', () => {
        const resultado = Funcoes.Soma(3.5 , 3)
        expect(resultado).toBe(6.5)
    })

    it('Somando números decimais com um número negativo inteiro', () => {
        const resultado = Funcoes.Soma(3.5 , -3)
        expect(resultado).toBe(0.5)
    })

    it('Somando um número com 2 decimais e um número inteiro negativo', () => {
        const resultado = Funcoes.Soma(3.55 , -3)
        expect(resultado).toBe(0.55)
    })

    it('Somando um número inteiro e um número com 2 decimais', () => {
        const resultado = Funcoes.Soma(3 , 3.55)
        expect(resultado).toBe(6.55)
    })

    it('Soma com resultado decimal negativo', () => {
        const resultado = Funcoes.Soma(3 , -3.5)
        expect(resultado).toBe(-0.5)
    })

    it('Soma com resultado decimal negativo onde o negativo é enviado primeiro', () => {
        const resultado = Funcoes.Soma(-4.5, 3)
        expect(resultado).toBe(-1.5)
    })

    it('Soma com resultado decimal negativo com dois números após a vírgula', () => {
        const resultado = Funcoes.Soma(8 , -9.55)
        expect(resultado).toBe(-1.55)
    })
    
    it('Soma com resultado decimal negativo com dois números após a vírgula onde o negativo é enviado primeiro', () => {
        const resultado = Funcoes.Soma(-9.55 , 8)
        expect(resultado).toBe(-1.55)
    })
})

describe('testando a operação subtrair: ', () => {

    it('Subitrair dois números inteiros positivos', () => {
        const resultado = Funcoes.Subtracao(2, 1)
        expect(resultado).toBe(1)
    })

    it('Subitrair um número positivo inteiro e um negativo inteiro', () => {
        const resultado = Funcoes.Subtracao(3, -2)
        expect(resultado).toBe(5)
    })

    it('Subitrair um número negativo inteiro e um  positivo inteiro', () => {
        const resultado = Funcoes.Subtracao(-1, 2)
        expect(resultado).toBe(-3)
    })

    it('Subitrair um número com resultado negativo inteiro', () => {
        const resultado = Funcoes.Subtracao(-4, 2)
        expect(resultado).toBe(-6)
    })

    it('Subitrair um número com resultado negativo inteiro em outra ordem', () => {
        const resultado = Funcoes.Subtracao(-2, 4)
        expect(resultado).toBe(-6)
    })

    it('Subitrair um número e um 0', () => {
        const resultado = Funcoes.Subtracao(2 , 0)
        expect(resultado).toBe(2)
    })

    it('Subitrair um 0 e um número', () => {
        const resultado = Funcoes.Subtracao(0 , 2)
        expect(resultado).toBe(-2)
    })

    it('Subitrair número e letra', () => {
        const funSubitrair = () => Funcoes.Subtracao(2 , 'a')
        expect(funSubitrair).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Subitrair letra e número', () => {
        const funSubitrair = () => Funcoes.Subtracao('a' , 2)
        expect(funSubitrair).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Subitrair número inteiro  e vazio', () => {
        const funSubitrair = () => Funcoes.Subtracao(2 , )
        expect(funSubitrair).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })
    
    it('Receber apenas um número', () => {
        const funSubitrair = () => Funcoes.Subtracao(2)
        expect(funSubitrair).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Subitrair números grandes positivos', () => {
        const resultado = Funcoes.Subtracao(40000000000 , 20000000000)
        expect(resultado).toBe(20000000000)
    })

    it('Subitrair números grandes negativos', () => {
        const resultado = Funcoes.Subtracao(-20000000000 , 20000000000)
        expect(resultado).toBe(-40000000000)
    })

    it('Subitraindo dois zeros', () => {
        const resultado = Funcoes.Subtracao(0 , 0)
        expect(resultado).toBe(0)
    })

    it('Tendo zero ao Subitrair números diferentes de zero', () => {
        const resultado = Funcoes.Subtracao(4 , -4)
        expect(resultado).toBe(8)
    })

    it('Subitraindo números decimais e resultado inteiro', () => {
        const resultado = Funcoes.Subtracao(4.5 , -3.5)
        expect(resultado).toBe(8)
    })

    it('Subitraindo números decimais e resultado decimal', () => {
        const resultado = Funcoes.Subtracao(3.5 , 3)
        expect(resultado).toBe(0.5)
    })

    it('Subitraindo números decimais com um número negativo inteiro', () => {
        const resultado = Funcoes.Subtracao(3.5 , -3)
        expect(resultado).toBe(6.5)
    })

    it('Subitraindo um número com 2 decimais e um número inteiro negativo', () => {
        const resultado = Funcoes.Subtracao(3.55 , -3)
        expect(resultado).toBe(6.55)
    })

    it('Subitraindo um número inteiro e um número com 2 decimais', () => {
        const resultado = Funcoes.Subtracao(3 , 3.55)
        expect(resultado).toBe(-0.55)
    })

    it('Subitrair com resultado decimal negativo', () => {
        const resultado = Funcoes.Subtracao(3 , -3.5)
        expect(resultado).toBe(6.5)
    })

    it('Subitrair com resultado decimal negativo onde o negativo é enviado primeiro', () => {
        const resultado = Funcoes.Subtracao(-4.5, 3)
        expect(resultado).toBe(-7.5)
    })

    it('Subitrair com resultado decimal negativo com dois números após a vírgula', () => {
        const resultado = Funcoes.Subtracao(8 , -9.55)
        expect(resultado).toBe(17.55)
    })
    
    it('Subitrair com resultado decimal negativo com dois números após a vírgula onde o negativo é enviado primeiro', () => {
        const resultado = Funcoes.Subtracao(-9.55 , 8)
        expect(resultado).toBe(-17.55)
    })
})

describe('testando a multiplicação: ', () => {

    it('Multiplicar dois números inteiros positivos', () => {
        const resultado = Funcoes.Multiplicacao(2, 1)
        expect(resultado).toBe(2)
    })

    it('Multiplicar um número positivo inteiro e um negativo inteiro', () => {
        const resultado = Funcoes.Multiplicacao(3, -2)
        expect(resultado).toBe(-6)
    })

    it('Multiplicar um número negativo inteiro e um  positivo inteiro', () => {
        const resultado = Funcoes.Multiplicacao(-1, 2)
        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número com resultado negativo inteiro', () => {
        const resultado = Funcoes.Multiplicacao(-4, 2)
        expect(resultado).toBe(-8)
    })

    it('Multiplicar um número com resultado negativo inteiro em outra ordem', () => {
        const resultado = Funcoes.Multiplicacao(-2, 4)
        expect(resultado).toBe(-8)
    })

    it('Multiplicar um número e um 0', () => {
        const resultado = Funcoes.Multiplicacao(2 , 0)
        expect(resultado).toBe(0)
    })

    it('Multiplicar um 0 e um número', () => {
        const resultado = Funcoes.Multiplicacao(0 , 2)
        expect(resultado).toBe(0)
    })

    it('Multiplicar número e letra', () => {
        const funMultiplicar = () => Funcoes.Multiplicacao(2 , 'a')
        expect(funMultiplicar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Multiplicar letra e número', () => {
        const funMultiplicar = () => Funcoes.Multiplicacao('a' , 2)
        expect(funMultiplicar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Multiplicar número inteiro  e vazio', () => {
        const funMultiplicar = () => Funcoes.Multiplicacao(2 , )
        expect(funMultiplicar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })
    
    it('Receber apenas um número', () => {
        const funMultiplicar = () => Funcoes.Multiplicacao(2)
        expect(funMultiplicar).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Multiplicar números grandes positivos', () => {
        const resultado = Funcoes.Multiplicacao(2 , 20000000000)
        expect(resultado).toBe(40000000000)
    })

    it('Multiplicar números grandes negativos', () => {
        const resultado = Funcoes.Multiplicacao(-2 , 20000000000)
        expect(resultado).toBe(-40000000000)
    })

    it('Multiplicando dois zeros', () => {
        const resultado = Funcoes.Multiplicacao(0 , 0)
        expect(resultado).toBe(0)
    })

    it('Multiplicando um número inteiro e um número com 2 decimais', () => {
        const resultado = Funcoes.Multiplicacao(2 , 3.55)
        expect(resultado).toBe(7.1)
    })
})

describe('testando a divisão: ', () => {

    it('Dividir dois números inteiros positivos', () => {
        const resultado = Funcoes.Divisao(2, 1)
        expect(resultado).toBe(2)
    })

    it('Dividir um número positivo inteiro e um negativo inteiro', () => {
        const resultado = Funcoes.Divisao(3, -2)
        expect(resultado).toBe(-1.5)
    })

    it('Dividir um número negativo inteiro e um  positivo inteiro', () => {
        const resultado = Funcoes.Divisao(-1, 2)
        expect(resultado).toBe(-0.5)
    })

    it('Dividir um número com resultado negativo inteiro', () => {
        const resultado = Funcoes.Divisao(-4, 2)
        expect(resultado).toBe(-2)
    })

    it('Dividir um número com resultado negativo inteiro em outra ordem', () => {
        const resultado = Funcoes.Divisao(-2, 4)
        expect(resultado).toBe(-0.5)
    })

    it('Dividir um número e um 0', () => {
        const funDividir = () => Funcoes.Divisao(2 , 0)
        expect(funDividir).toThrow('Não é possível dividir por 0')
    })

    it('Dividir um 0 e um número', () => {
        const funDividir = () => Funcoes.Divisao(0 , 2)
        expect(funDividir).toThrow('Não é possível dividir por 0')
    })

    it('Dividir número e letra', () => {
        const funDividir = () => Funcoes.Divisao(2 , 'a')
        expect(funDividir).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Dividir letra e número', () => {
        const funDividir = () => Funcoes.Divisao('a' , 2)
        expect(funDividir).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Dividir número inteiro  e vazio', () => {
        const funDividir = () => Funcoes.Divisao(2 , )
        expect(funDividir).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })
    
    it('Receber apenas um número', () => {
        const funDividir = () => Funcoes.Divisao(2)
        expect(funDividir).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Dividir números grandes positivos', () => {
        const resultado = Funcoes.Divisao(2 , 20000000000)
        expect(resultado).toBe(0) //Não é possível dividir números grandes dessa maneira, vou deixar o teste como lembrete
    })

    it('Dividir números grandes negativos', () => {
        const resultado = Funcoes.Divisao(-2 , 20000000000)
        expect(resultado).toBe(-0) //Não é possível dividir números grandes dessa maneira, vou deixar o teste como lembrete
    })

    it('Dividindo dois zeros', () => {
        const funDividir = () => Funcoes.Divisao(0 , 0)
        expect(funDividir).toThrow('Não é possível dividir por 0')
    })

    it('Dividindo um número inteiro e um número com 2 decimais', () => {
        const resultado = Funcoes.Divisao(2 , 3.55)
        expect(resultado).toBe(0.56)
    })
})

describe('testando a raiz: ', () => {

    it('Raiz de número inteiros positivos', () => {
        const resultado = Funcoes.Raiz(25)
        expect(resultado).toBe(5)
    })

    it('Raiz de um número inteiro negativo ', () => {
        const funDividir = () => Funcoes.Raiz(-2)
        expect(funDividir).toThrow('Envie apenas número positivos')
    })

    it('Raiz de 0', () => {
        const resultado = Funcoes.Raiz(0)
        expect(resultado).toBe(0)
    })

    it('Raiz de letra', () => {
        const funDividir = () => Funcoes.Raiz('a')
        expect(funDividir).toThrow('Envie apenas número positivos')
    })

    it('Raiz de vazio', () => {
        const funDividir = () => Funcoes.Raiz()
        expect(funDividir).toThrow('Envie apenas número positivos')
    })

    it('Raiz de números grandes positivos', () => {
        const resultado = Funcoes.Raiz(20000000000)
        expect(resultado).toBe(141421.36)
    })

})

describe('testando a potencia: ', () => {

    it('Potência de número inteiros positivos', () => {
        const resultado = Funcoes.Potencia(2 , 3)
        expect(resultado).toBe(8)
    })

    it('Potência com um número inteiro negativo ', () => {
        const resultado = Funcoes.Potencia(2 , -3)
        expect(resultado).toBe(0.13)
    })

    it('Potência de 0', () => {
        const resultado = Funcoes.Potencia(0 , 0)
        expect(resultado).toBe(1)
    })

    it('Potência de letra', () => {
        const funDividir = () => Funcoes.Potencia('a')
        expect(funDividir).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Potência de vazio', () => {
        const funDividir = () => Funcoes.Potencia()
        expect(funDividir).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.')
    })

    it('Potência de números grandes positivos', () => {
        const resultado = Funcoes.Potencia(20000000000, 3)
        expect(resultado).toBe(8e+30)
    })

})