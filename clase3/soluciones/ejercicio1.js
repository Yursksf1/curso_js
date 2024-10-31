// el comentario
/*
1) Definir un objeto persona con datos de ustedes  mismos. este objeto debe tener los atributos de 
    nombre, 
    apellido, 
    edad, 
    idiomas que hablan, y 3 atributos mas
2) Definir un ingreso de datos, almacenando el data ingresado en una variable y presentarlo en la consola
3) crear un programa que solicite al usuario la edad y responda en que año aproximadamente nacio
*/

// SOLUCION UNO
persona = {
    "nombre": "Yurley",
    "apellido": "Sanchez",
    "edad": 30,
    "idiomas": ["Español", "Ingles"],
    "estatura": 1.63,
    "profesion": "Docente",
    "comida_favorita": "Pizza",
    "pasatiempo": "Cocinar",
    "num_paises_visitado": "2"
}

console.log(persona.nombre)
console.log(persona.pasatiempo)

// SOLUCION DOS
respuesta = prompt('Ingresa que dia es hoy?: ')
// console.log("hoy es: ", respuesta)
alert(`el dia de hoy es ${respuesta}`)
alert("HOY ES: " + respuesta);

// SOLUCIONE TRES
const fecha = new Date();
const anoActual = fecha.getFullYear();
pregunta = prompt("Ingresa tu edad: ")
nacimiento = anoActual-pregunta
console.log("Nacio probablemente en: ", nacimiento)
