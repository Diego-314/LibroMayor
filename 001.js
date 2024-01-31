

endbtn.addEventListener('click', () => {
	calcular()
});


checkbtn.addEventListener('click', () => {
	check('.deudor', '.acreedor');
});


addvalue.addEventListener('click', () => {
	cantidadValores++;
	start();
});

