function recebeTecla(tecla) {
	return document.querySelector(tecla);
}

function tocaTecla(tecla, som) {
	tecla.addEventListener("click", function() {
		document.querySelector(som).play();
	});
}

tocaTecla(recebeTecla(".tecla_pom"), "#som_kkk");
tocaTecla(recebeTecla(".tecla_clap"), "#som_tecla_clap");
tocaTecla(recebeTecla(".tecla_tim"), "#som_tecla_tim");
tocaTecla(recebeTecla(".tecla_puff"), "#som_tecla_puff");
tocaTecla(recebeTecla(".tecla_splash"), "#som_tecla_splash");
tocaTecla(recebeTecla(".tecla_toim"), "#som_tecla_toim");
tocaTecla(recebeTecla(".tecla_psh"), "#som_tecla_psh");
tocaTecla(recebeTecla(".tecla_tic"), "#som_tecla_tic");
tocaTecla(recebeTecla(".tecla_tom"), "#som_tecla_tom");