


const change = async (obj) => 
{

	let a = obj.innerText.split(`\t`)
	let b;
	let h;


	if (!a[1] == "") 
		{
			b = parseFloat(prompt(`Cambiar el valor de ${a[0]} (${a[1]}) por: `))
			if (isNaN(b)) return alert('El valor ingresado es incorrecto')
			h = 'A'
		};

	if (!a[2] == "") 
		{
			b = parseFloat(prompt(`Cambiar el valor de ${a[0]} (${a[2]}) por: `))
			if (isNaN(b) == NaN) return alert('El valor ingresado es incorrecto')
			h = 'P'
		};
	if (a[5] == "" && !a[6] == "") 
		{
			h = 'RP'
		} else if (!a[5] == "" && a[6] == "") 
		{
			h = 'RN'
		};

	if (h == 'P' || h == 'PN') 
	{
		obj.innerHTML = `<tr><td class="nombre">${a[0]}</td><td class="deudor"></td><td class="acreedor">${b}</td><td class="activo"></td><td class="pasivo">${b}</td><td class="rn"></td><td class="rp"></td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};

	if (h == 'A') 
	{
		obj.innerHTML =  `<tr><td class="nombre">${a[0]}</td><td class="deudor">${b}</td><td class="acreedor"></td><td class="activo">${b}</td><td class="pasivo"></td><td class="rn"></td><td class="rp"></td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};

	if (h == 'RP') 
	{
		obj.innerHTML =  `<tr><td class="nombre">${a[0]}</td><td class="deudor"></td><td class="acreedor">${b}</td><td class="activo"></td><td class="pasivo"></td><td class="rn"></td><td class="rp">${b}</td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};
if (h == 'RN') 
	{
		obj.innerHTML =  `<tr><td class="nombre">${a[0]}</td><td class="deudor">${b}</td><td class="acreedor"></td><td class="activo"></td><td class="pasivo"></td><td class="rn">${b}</td><td class="rp"></td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};


};