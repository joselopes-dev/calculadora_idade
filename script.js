// Função para gerar anos em ordem decrescente
function populateYearSelect(selectElement, startYear, endYear) {
    for (let year = startYear; year >= endYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        selectElement.appendChild(option);
    }
}

// Populando o select de anoAtual (2024 até 2050)
populateYearSelect(document.getElementById('anoAtual'), 2050, 2024);

// Populando o select de dataNasc (2024 até 1900)
populateYearSelect(document.getElementById('dataNasc'), 2024, 1900);

document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const anoAtual = parseInt(document.getElementById('anoAtual').value);
    const dataNasc = parseInt(document.getElementById('dataNasc').value);

    if (dataNasc >= 1900 && anoAtual >= dataNasc) {
        const novaIdade = anoAtual - dataNasc;
        document.getElementById('resultado').textContent = `A idade atualizada é: ${novaIdade}`;
    } else {
        document.getElementById('resultado').textContent = 'Dados inválidos!';
    }
});
