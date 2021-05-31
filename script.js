const saldoInicial = prompt('Escreva o seu saldo inicial')

const valorDaCompra = prompt('Escreva o valor da compra')

meuResultado(saldoInicial, valorDaCompra)

function meuResultado(saldoInicial, valorDaCompra){
    if (valorDaCompra < saldoInicial) {
        alert (`A sua compra foi realizada com sucessso`)
    }
    else if (valorDaCompra > saldoInicial) {
        alert (`Saldo insuficiente`)
    }
    
}


