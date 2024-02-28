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

    const classificacao = tabelaImc(imc)

    mostrarResultado(classificacao)
    
    
})

function calcularImc(peso, altura){
    let imc = (peso / altura ** 2); //formula do imc
    return imc.toFixed(2); //toFixed(2) usado para formatar o numero com 2 casas decimais

}

function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg
}

//função para classificar em qual grau de imc
function tabelaImc(imc){
    const classificacao = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III']
    
    if (imc >= 40) return classificacao[5];
    if (imc >= 35) return classificacao[4];
    if (imc >= 30) return classificacao[3];
    if (imc >= 25) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    if (imc <18.5) return classificacao[0];
    

}