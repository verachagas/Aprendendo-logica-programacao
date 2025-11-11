const botao = document.querySelector("#btn")

function chamaFuncao() {
alert ('Ola')
segundaFuncao()

}
function segundaFuncao() {
    alert ('segunda função chamada') 
    terceiraFuncao()
}

function terceiraFuncao() {
    alert ('terceira função chamada') 
    quartaFuncao()
}

function quartaFuncao() {
    alert ('quanta função chamada') 
    quintaFuncao()
}

function quintaFuncao() {
    alert ('quinta função chamada') 
    chamaFuncao()
}

botao.addEventListener('click', chamaFuncao)

