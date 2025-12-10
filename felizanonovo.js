/* fazer contagem regressiva */

for ( let regressiva = 10; regressiva >= 0;
regressiva --) { (() => {
    console.log(regressiva)
    }, 1000);

    setTimeOut( () => {
    console.log("FELIZ ANO NOVO !!!")  
         }, (10 - REGRESSIVA) * 1000);
        }