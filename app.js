/*
funções do js
   alert()
   console.log()
funções personalizadas
   - funções criadas pela pessoa que está desenvolvendo.
   - a função precisa ser chamada para ser executada. Para criar um função usamos a palavra function
   Ex: function abacaxi(){`
}
*/
/*
function EscreverFrases(texto){
    console.log(texto)
}
EscreverFrases("I like")
EscreverFrases("I'm fine")
*/

//parseFloat --> converte de texto para decimal 
//parseInt --> converte de texto para inteiro

function Converter(){
    //DOM - Document Object Model
    //PEGAR O VALOR DO CAMPO
    //let valorEmDolar = document.getElementById("valor").value
    let valorEmDolar = document.querySelector("#valor").value

    //CONVERTER O VALOR DO CAMPO EM NÚMERO
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let cotacaoEuro = 6
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar
    let valorEmEuro = valorEmDolarNumerico * cotacaoEuro

    //INSERIR O RESULTADO NA TELA 
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)

    document.querySelector("#valorEuro").innerHTML = "O resultado em Euro é R$" + valorEmEuro.toFixed(2)

    let bitcoin = valorEmReal / 225000
    document.querySelector("#valorBitcoin").innerHTML = "O resultado em bitcoin é " + bitcoin.toFixed(2)
}