'use strict'

// Operadores
var num1 = 7;
var num2 = 12;
var op = num1 + num2;

alert("Resultado: "+op)

// Tipos de datos TypeDef y TypeOf
var numero_entero = 44;
var cadena_texto = "hola que tal";
var verdadero_falso = true; // o puede ser false

var numero_falso = "33.4";

console.log(Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7);
console.log(String(numero_entero)+7);
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);