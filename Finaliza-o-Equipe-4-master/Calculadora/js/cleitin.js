function calcularRentabilidadeLiquida(valorAtual, valorInvestido, taxaImposto) {
    let rentabilidadeBruta = valorAtual - valorInvestido;
    let rentabilidadeLiquida = rentabilidadeBruta * (1 - taxaImposto);
    let rentabilidadePercentual = (rentabilidadeLiquida / valorInvestido) * 100;
    let valorFinal = valorAtual + rentabilidadeLiquida;
    return { rentabilidadePercentual: rentabilidadePercentual, valorFinal: valorFinal };
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        var nivel = document.querySelector('input[name="nivel"]:checked');
        if (nivel) {
        nivel = nivel.value;
        if (nivel === "Iniciante") {
            window.location.href = "Iniciante.html";
        } else if (nivel === "Profissional") {
            window.location.href = "Profissional.html";
        }
        } else {
            alert("Por favor, selecione um nível de investimento.");
        }
        
        let valorInicial = parseFloat(document.getElementById('valorInicial').value);
        let investMensal = parseFloat(document.getElementById('invest-mensal').value);
        let periodoMeses = parseFloat(document.getElementById('range').value);
        let taxaImposto = 0.15; // Taxa de imposto fixa para este exemplo (15%)
        let valorAtual = valorInicial + (investMensal * periodoMeses);
        
        let rentabilidade = calcularRentabilidadeLiquida(valorAtual, valorInicial, taxaImposto);
        
        document.getElementById('resultado').innerText = "A rentabilidade percentual líquida do investimento é de: " + rentabilidade.rentabilidadePercentual.toFixed(2) + "%";
        document.getElementById('resultado').innerText += "\nValor final após o período de investimento: R$ " + rentabilidade.valorFinal.toFixed(2);
        
        document.getElementById('resultado').innerText = "A rentabilidade percentual líquida do investimento é de: " + rentabilidadePercentual.toFixed(2) + "%";
        //final do código para calcular a Tesouro Direto
        
    });
});
