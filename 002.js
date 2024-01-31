
const endbtn = document.getElementById('endbtn');
const type = document.getElementById('type');
const cuenta = document.getElementById('cuenta');
const checkbtn = document.getElementById('checkbtn');
const workSpace = document.getElementById('workSpace');
const cuadro = document.getElementById('cuadro');
const addvalue = document.getElementById('addvalue');
let cantidadValores = 0;
let valores = []


const check = () => 
{

let deudor = document.querySelectorAll('.deudor');
let r = 0;
for (let i = 0; i < deudor.length; i++) 
		{
			if (deudor[i].firstChild == null) {
				r += 0
			} else {
				r += parseFloat(deudor[i].firstChild.data);
			}
		};

let acreedor = document.querySelectorAll('.acreedor');
let r2 = 0;
for (let i = 0; i < acreedor.length; i++) 
		{
			if (acreedor[i].firstChild == null) {
				r2 += 0
			} else {
				r2 += parseFloat(acreedor[i].firstChild.data);
			}
		};

let activo = document.querySelectorAll('.activo');
let r3 = 0;
for (let i = 0; i < activo.length; i++) 
		{
			if (activo[i].firstChild == null) {
				r3 += 0
			} else {
				r3 += parseFloat(activo[i].firstChild.data);
			}
		};

let pasivo = document.querySelectorAll('.pasivo');
let r4 = 0;
for (let i = 0; i < pasivo.length; i++) 
		{
			if (pasivo[i].firstChild == null) {
				r4 += 0
			} else {
				r4 += parseFloat(pasivo[i].firstChild.data);
			}
		};

let rn = document.querySelectorAll('.rn');
let r5 = 0;
for (let i = 0; i < rn.length; i++) 
		{
			if (rn[i].firstChild == null) {
				r5 += 0
			} else {
				r5 += parseFloat(rn[i].firstChild.data);
			}
		};

let rp = document.querySelectorAll('.rp');
let r6 = 0;
for (let i = 0; i < rp.length; i++) 
		{
			if (rp[i].firstChild == null) {
				r6 += 0
			} else {
				r6 += parseFloat(rp[i].firstChild.data);
			}
		};

let nuevaFila = document.createElement('tr');
let celdaTotal = document.createElement('th');
let textoCeldaTotal = document.createTextNode('Totales');
celdaTotal.appendChild(textoCeldaTotal);
nuevaFila.appendChild(celdaTotal);

let celdaValorTotal = document.createElement('td');
let textoCeldaValorTotal = document.createTextNode(r);
celdaValorTotal.appendChild(textoCeldaValorTotal);
nuevaFila.appendChild(celdaValorTotal);




let celdaValorTotal2 = document.createElement('td');
let textoCeldaValorTotal2 = document.createTextNode(r2);
celdaValorTotal2.appendChild(textoCeldaValorTotal2);
nuevaFila.appendChild(celdaValorTotal2);


let celdaValorTotal3 = document.createElement('td');
let textoCeldaValorTotal3 = document.createTextNode(r3);
celdaValorTotal3.appendChild(textoCeldaValorTotal3);
nuevaFila.appendChild(celdaValorTotal3);

let celdaValorTotal4 = document.createElement('td');
let textoCeldaValorTotal4 = document.createTextNode(r4);
celdaValorTotal4.appendChild(textoCeldaValorTotal4);
nuevaFila.appendChild(celdaValorTotal4);

let celdaValorTotal5 = document.createElement('td');
let textoCeldaValorTotal5 = document.createTextNode(r5);
celdaValorTotal5.appendChild(textoCeldaValorTotal5);
nuevaFila.appendChild(celdaValorTotal5);

let celdaValorTotal6 = document.createElement('td');
let textoCeldaValorTotal6 = document.createTextNode(r6);
celdaValorTotal6.appendChild(textoCeldaValorTotal6);
nuevaFila.appendChild(celdaValorTotal6);


cuadro.appendChild(nuevaFila)

alert(`Deudor - Acreedor: ${r - r2}`)
alert(`Activo - Pasivo: ${r3 - r4} || RP - RN: ${r6 - r5}`)


};


const start = () => 
{
let text = '';
for (let i = 0; i < cantidadValores; i++) 
	{
		text += `<input type="number" placeholder="Ingrese el valor ${i+1}" id="valor${i+1}">`;
		workSpace.innerHTML = text;
	};
};

const añadir = (valores) => 
{
let text = cuadro.innerHTML;
let text2 = '';
let total = 0;
for (let i = 0; i < cantidadValores; i++) 
	{
		if (valores[i] == '') 
			{
				total += 0
			} else {
				total += parseFloat(valores[i])
			}
	};
if (type.value == 'A') 
	{
		text2 += `<tr><td class="nombre">${cuenta.value}</td><td class="deudor">${total}</td><td class="acreedor"></td><td class="activo">${total}</td><td class="pasivo"></td><td class="rn"></td><td class="rp"></td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};
if (type.value == 'P' || type.value == 'PN') 
	{
		text2 += `<tr><td class="nombre">${cuenta.value}</td><td class="deudor"></td><td class="acreedor">${total}</td><td class="activo"></td><td class="pasivo">${total}</td><td class="rn"></td><td class="rp"></td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};
if (type.value == 'RP') 
	{
		text2 += `<tr><td class="nombre">${cuenta.value}</td><td class="deudor"></td><td class="acreedor">${total}</td><td class="activo"></td><td class="pasivo"></td><td class="rn"></td><td class="rp">${total}</td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};
if (type.value == 'RN') 
	{
		text2 += `<tr><td class="nombre">${cuenta.value}</td><td class="deudor">${total}</td><td class="acreedor"></td><td class="activo"></td><td class="pasivo"></td><td class="rn">${total}</td><td class="rp"></td><td onclick="change(this.parentNode)">Modificar</td></tr>`
	};
let text3 = text + text2
cuadro.innerHTML = text3;
valores = []
};

const calcular = () => 
{
for (let i = 0; i < cantidadValores; i++) 
	{
		valores.unshift(document.getElementById(`valor${i+1}`).value)
	};
añadir(valores);
};
