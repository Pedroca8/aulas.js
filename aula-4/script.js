const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const textos = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textos.innerHTML = `<p>seu numero + 2 e ${numero + 2}.</p>`;
