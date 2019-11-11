'use strict'

// Condicional IF
// Estructuras de control, instrucciones que nos permite comparar 

var edad1 = 10;
var edad2 = 12;

// si pasa esto, ejecuta esto
if(edad1 > edad2){
	// ejecuta esto
	console.log("edad1 es mayor que edad2")
}else{
	console.log("La edad1 es inferior");
}

/*
// Operadores Logicos
	AND (y): &&
	OR (o): ||
	Negacion: !
*/

//Negacion
var year = 2018;
if(year != 2016){
	console.log("El ano no es 2016, realmente es: "+year);
}

//AND
if(year >= 2000 && year <=2020){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || year ==2018){
	console.log("El ano acaba en 8");
}