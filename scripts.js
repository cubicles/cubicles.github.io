let touma = 0;
const chichofunct = ()=>{
	const arreglo = ["Querida Nathaly,","Querida Nathy,","Amorchin,","Querida Pequitas,","PECA PARLANTE,","Mi amor,"]
	const textito = document.getElementById("nombre")
	textito.innerHTML = arreglo[touma];
	touma++
	if (touma>=arreglo.length){
		touma = 0;
	}
}

chichofunct()

setInterval(()=>chichofunct(),3000);