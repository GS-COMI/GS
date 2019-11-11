'use strict'

//Prueba con let y var

// Prueba con var
var num = 40;
console.log(num); // valor 40

if(true){
	var num = 50;
	console.log(num); // valor 50
}

console.log(num); // valor 50

// Prueba con let
var texto="Curso JS";
console.log(texto);

if(true)
{
	let texto = "Curso Laravel 5"; // Limitamos el alcanse en el bloque de codigo
	console.log(texto);
}

console.log(texto);