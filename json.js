

function pegarDados() {
    //busca os dados
    fetch('pessoas.json')
        //converte as resposta  em json
        .then(resposta => resposta.json())
        // usa o json convertidos
        .then(dados => {
            const { nome, descricao, } = dados
            const container = document.querySelector(".container")

            dados.forEach(pessoa => {
                const { nome, descricao } = pessoa

                const div = document.createElement("div")

                div.classList.add('card')

                div.innerHTML = `<h2>${nome}</h2>
            <p>${descricao }</p> `

                container.appendChild(div)

            });



        })

}

pegarDados()

