const visor = document.getElementById('resultado');

function inserir(valor) {
    visor.value += valor;
}

function limpar() {
    visor.value = "";
}

function calcular() {
    try {
        // A função eval() resolve a expressão matemática dentro do visor
        visor.value = eval(visor.value);
    } catch (e) {
        visor.value = "Erro";
        setTimeout(limpar, 1500); // Limpa o erro após 1.5s
    }
}

