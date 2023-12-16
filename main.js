const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>'
const spanAprovado = '<span class="resultado aprovado">Aprovado!</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado!</span>'
const valorMedia = parseFloat(prompt('Informe o valor da média"'))
const atividades = []
const notas = []

let linhas = ``

form.addEventListener('submit', function(e) {

    e.preventDefault()

    addLinha()
    atualizaTabela()   
    atualizaMedia()

})

function addLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    
    if ( atividades.includes(inputNomeAtividade.value)) {

        alert(`A atividade: ${inputNomeAtividade.value} já consta na lista!`)

    } else {

        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha = `<tr>`
    
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= valorMedia ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha    

    }

    form.reset()

}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function atualizaMedia() {
    
    const media = calculaMedia()
    
    document.getElementById('media-final-valor').innerHTML = media.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = media >= valorMedia ? spanAprovado : spanReprovado
    
}

function calculaMedia() {

    let soma = 0

    for (let i = 0; i< notas.length; i++) {
        soma += notas[i]
    }

    return soma / notas.length

}