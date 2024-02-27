//capturar os eventos do formulário
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){ //a função aguarda o usuario clickar no botão
    e.preventDefault(); // muda o comportamento padrão do formulário

    

    const inputPeso = e.target.querySelector('#peso')
    
    const peso = Number(inputPeso.value)
    console.log(inputPeso)
    console.log(peso)

    const inputAltura = e.target.querySelector('#altura')

    const altura = Number(inputAltura.value)
    console.log(inputAltura)
    console.log(altura)

    const imc = calcularImc(peso, altura)

    console.log(imc)
    alert(imc)
    
    
})

function calcularImc(peso, altura){
    let imc = (peso / altura ** 2); //formula do imc
    return imc.toFixed(2); //toFixed(2) usado para formatar o numero com 2 casas decimais

}