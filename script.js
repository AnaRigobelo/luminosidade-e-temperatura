// Funcionalidade do Simulador de Temperatura e Luminosidade
const tempRange = document.getElementById('tempRange');
const tempVal = document.getElementById('tempVal');
const materialSelect = document.getElementById('materialSelect');
const luminosityOutput = document.getElementById('luminosityOutput');
const statusDesc = document.getElementById('statusDesc');

function updateSimulation() {
const T = parseFloat(tempRange.value);
const coeff = parseFloat(materialSelect.value);

tempVal.textContent = T;

// Simulação baseada na proporcionalidade aproximada de Stefan-Boltzmann (T^4 normalizada)
// Normalizando em relação a 3000K para exibição amigável
const baseT = 3000;
const luminosity = coeff * Math.pow(T / baseT, 4) * 81; // 81 é a base para 3000K

luminosityOutput.textContent = luminosity.toFixed(2) + " u.a.";

// Descrição dinâmica baseada na temperatura
if (T < 3500) {
    statusDesc.textContent = "Baixa luminosidade visual, forte emissão infravermelha (Tons avermelhados).";
} else if (T >= 3500 && T < 6000) {
    statusDesc.textContent = "Luminosidade moderada, espectro amarelado/branco (Ex: Sol ou lâmpada incandescente).";
} else if (T >= 6000 && T < 8000) {
    statusDesc.textContent = "Alta luminosidade e brilho intenso, espectro branco-azulado.";
} else {
    statusDesc.textContent = "Luminosidade extrema, forte radiação azul e ultravioleta.";
}


}

tempRange.addEventListener('input', updateSimulation);
materialSelect.addEventListener('change', updateSimulation);

// Inicialização
updateSimulation();
