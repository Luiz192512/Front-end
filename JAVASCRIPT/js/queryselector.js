const lista = document.querySelectorAll('.example')
for (let i = 0; i < lista.length; i++){
    lista[i].style.backgroundColor = "yellow"
}

document.querySelectorAll('.example')[4].style.backgroundColor = 'pink'