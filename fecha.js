<!-- // FECHA - Javascript
/* ==============================================
   Desarrollado por: Jr. Gregorio H. Pineda V. 
   © Todos los Derechos Reservados 2018 */

function muestraFecha() {

	var Fecha = new Date();
	var Anio = Fecha.getYear();

	if (Anio < 1000) {
		Anio += 1900;
	}

	var Dia = Fecha.getDay();
	var Mes = Fecha.getMonth();
	var DiaN = Fecha.getDate();

	var Dias = new Array("Domingo", 
		                 "Lunes",
		                 "Martes",
		                 "Miércoles",
		                 "Jueves",
		                 "Viernes",
		                 "Sábado",
		                 "Domingo");

	var Meses = new Array("Enero", 
		                  "Febrero",
		                  "Marzo",
		                  "Abril",
		                  "Mayo",
		                  "Junio",
		                  "Julio",
		                  "Agosto",
		                  "Septiembre",
		                  "Octubre",
		                  "Noviembre",
		                  "Diciembre");

	/* Agregando 0 al número de días menor al 10 */
	if (DiaN < 10) {
		DiaN = "0"+DiaN;
	}

	// Accediendo al nodo
	document.getElementById("Fecha").innerHTML = Dias[Dia]+", "+DiaN+" de "+Meses[Mes]+" de "+Anio;
}

// Muestra Fecha
window.onload = function() {
	muestraFecha();
}
//-->
