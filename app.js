function Converter(){
    let valorEmDolar = document.querySelector("#valor").value
    let valorEmDolarNumerico = parseFloat(valorEmDolar)
    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)
    let bitcoin = valorEmReal / 225000
    document.querySelector("#valorBitcoin").innerHTML = "O resultado em Bitcoin é " + bitcoin.
    toFixed(2)
    let iene = valorEmReal / 48  
    document.querySelector("#valorIene").innerHTML = "O resultado em Iene é " + iene.
    toFixed(2)
}