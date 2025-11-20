/* 1. usuario ele vai escolher ate x valor  ex 50
2. vcs vao usar o loop for
 3. a cada numero que passa o loop vai acumulando o valoe em uma variavel SOMA
 4. no final ou o loop apresenta o valor da SOMA */


 let numero = Number(prompt("digite um numero:"))
 let soma = 0
 for (let contador = 1; contador <= numero; contador++){
    soma = soma + contador 
    console.log(soma);
    
 }