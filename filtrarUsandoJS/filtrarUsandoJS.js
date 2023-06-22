const filtrarEntrada = document.getElementById('filtro')
const listaDeItens = document.querySelectorAll('#lista li')

filtrarEntrada.addEventListener('input', function () {
    const textoFiltrado = filtrarEntrada.value.toLowerCase();

    listaDeItens.forEach (item => {
        const texto = item.textContent.toLowerCase();
        item.style.display = texto.includes(textoFiltrado) ?
        'block' : 'none';
    });
});

