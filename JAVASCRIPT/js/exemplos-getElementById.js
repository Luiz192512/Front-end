function excluir(){
    elemento = document.getElementById("imagem");
    elemento.parentNode.removeChild(elemento);
}
function reaparecer(){
    elemento = document.getElementById("imagem");
    const newImg = document.createElement("img");
    container = document.getElementById("imageNova");
    newImg.src = "img/eu.png";
    container.appendChild(newImg);
}
function esconderTexto(){
    var elemento = document.getElementById("esconder");
    elemento.style.display = "none";
}
function aparecerTexto(){
    var elemento = document.getElementById("esconder");
    elemento.style.display = "";
}

function pegar(){
    var elemento = document.getElementById('texto');
    var valor = elemento.value;
    conteudo.innerHTML = valor;
}

function modificar(){
    var elemento = document.getElementById("meuElemento");
    elemento.innerHTML = "Luiz";
}

function colorir(){
    var elemento = document.getElementById('cor');
    elemento.style.color = 'red'
    elemento.style.fontSize = '50px'
    elemento.style.fontWeight = 'bold'
}