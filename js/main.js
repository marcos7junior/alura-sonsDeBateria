const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
	let tecla = listaDeTeclas[i];
	let instrumento = listaDeTeclas[i].classList[1];

	tecla.addEventListener("click", function() {
		document.querySelector(`#som_${instrumento}`).play();
	});

	tecla.onkeydown = function() {
		tecla.classList.add('ativa');
	}
	tecla.onkeyup = function() {
		tecla.classList.remove('ativa');
	}
}
