const Funcoes = require('../src/Services/Exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('testando a função somar: ', () => {

    it('Somar dois números inteiros positivos', () => {
        const resultado = Funcoes.Exercicio1(1, 2)
        expect(resultado).toBe(3)
    })

    it('Somar um número positivo inteiro e um negativo inteiro', () => {
        const resultado = Funcoes.Exercicio1(3, -2)
        expect(resultado).toBe(1)
    })

    it('Somar um número negativo inteiro e um  positivo inteiro', () => {
        const resultado = Funcoes.Exercicio1(-1, 2)
        expect(resultado).toBe(1)
    })

    it('Somar um número com resultado negativo inteiro', () => {
        const resultado = Funcoes.Exercicio1(-4, 2)
        expect(resultado).toBe(-2)
    })

    it('Somar um número com resultado negativo inteiro em outra ordem', () => {
        const resultado = Funcoes.Exercicio1(2, -4)
        expect(resultado).toBe(-2)
    })

    it('Somar um número e um 0', () => {
        const resultado = Funcoes.Exercicio1(2 , 0)
        expect(resultado).toBe(2)
    })

    it('Somar um 0 e um número', () => {
        const resultado = Funcoes.Exercicio1(0 , 2)
        expect(resultado).toBe(2)
    })

    it('Somar número e letra', () => {
        const funSomar = () => Funcoes.Exercicio1(2 , 'a') // a arrow function está aqui para atrasar a função
        expect(funSomar).toThrow('não é um número') // eu não espero ele ser(tobe) alguma coisa, eu espero ele jogar um erro(throw)
    })

    it('Somar letra e número', () => {
        const funSomar = () => Funcoes.Exercicio1('a' , 2)
        expect(funSomar).toThrow('não é um número')
    })

    it('Somar número inteiro  e vazio', () => {
        const funSomar = () => Funcoes.Exercicio1(2 , )
        expect(funSomar).toThrow('não é um número')
    })
    
    it('Receber apenas um número', () => {
        const funSomar = () => Funcoes.Exercicio1(2)
        expect(funSomar).toThrow('não é um número')
    })

    it('Somar números grandes positivos', () => {
        const resultado = Funcoes.Exercicio1(20000000000 , 20000000000)
        expect(resultado).toBe(40000000000)
    })

    it('Somar números grandes negativos', () => {
        const resultado = Funcoes.Exercicio1(-20000000000 , -20000000000)
        expect(resultado).toBe(-40000000000)
    })

    it('Somando dois zeros', () => {
        const resultado = Funcoes.Exercicio1(0 , 0)
        expect(resultado).toBe(0)
    })

    it('Tendo zero ao somar números diferentes de zero', () => {
        const resultado = Funcoes.Exercicio1(-4 , 4)
        expect(resultado).toBe(0)
    })

    it('Somando números decimais e resultado inteiro', () => {
        const resultado = Funcoes.Exercicio1(3.5 , 3.5)
        expect(resultado).toBe(7)
    })

    it('Somando números decimais e resultado decimal', () => {
        const resultado = Funcoes.Exercicio1(3.5 , 3)
        expect(resultado).toBe(6.5)
    })

    it('Somando números decimais com um número negativo inteiro', () => {
        const resultado = Funcoes.Exercicio1(3.5 , -3)
        expect(resultado).toBe(0.5)
    })

    it('Somando um número com 2 decimais e um número inteiro negativo', () => {
        const resultado = Funcoes.Exercicio1(3.55 , -3)
        expect(resultado).toBe(0.55)
    })

    it('Somando um número inteiro e um número com 2 decimais', () => {
        const resultado = Funcoes.Exercicio1(3 , 3.55)
        expect(resultado).toBe(6.55)
    })

    it('Soma com resultado decimal negativo', () => {
        const resultado = Funcoes.Exercicio1(3 , -3.5)
        expect(resultado).toBe(-0.5)
    })

    it('Soma com resultado decimal negativo onde o negativo é enviado primeiro', () => {
        const resultado = Funcoes.Exercicio1(-4.5, 3)
        expect(resultado).toBe(-1.5)
    })

    it('Soma com resultado decimal negativo com dois números após a vírgula', () => {
        const resultado = Funcoes.Exercicio1(8 , -9.55)
        expect(resultado).toBe(-1.55)
    })
    
    it('Soma com resultado decimal negativo com dois números após a vírgula onde o negativo é enviado primeiro', () => {
        const resultado = Funcoes.Exercicio1(-9.55 , 8)
        expect(resultado).toBe(-1.55)
    })
})

