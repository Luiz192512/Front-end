const imagem = document.querySelector('#imagem')
const url = 'https://rickandmortyapi.com/api/character'

function RickyAndMorty(){
    fetch(url,{
        method:'GET',
    })
    .then((resposta) => resposta.json())
    .then((dados)=>{
        console.log(dados)
    })
    .catch(erro => alert(erro))
}

function imprimirDados(dados){
    dados.result.forEach(element =>{
        imagem.innerHTML = `<img src="https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg">`
    });
}

RickyAndMorty()