 // Imprime los números del 0 al 9

for (let i = 0; i < 10; i++) {
    console.log(i);
}

 // Imprime cada fruta en el array
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit); 
}

// Imprime el nombre de la propiedad y su valor
const person = { name: 'Alice', age: 25, city: 'Paris' };
for (const key in person) {
    console.log(key, person[key]); 
}

 // Imprime cada número en el array
const numbers = [1, 2, 3, 4];
numbers.forEach(number => {
    console.log(number);
});



// map
// map crea un nuevo array con los resultados de aplicar una función a cada elemento del array original

// ejemplo con listas
const numbers2 = [1, 2, 3, 4];
const doubled = numbers2.map(number => number * 2);
console.log(doubled); 

// ejemplo con lista de objetos
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
];
const names = users.map(user => user.name);
console.log(names);
/*
Diferencias entre map y forEach
map: Retorna un nuevo array con los resultados de aplicar la función de transformación.
forEach: No retorna un nuevo array; solo ejecuta la función en cada elemento.
*/


/*
EJERCICIOS:
1. Imprimir los numero del 0 al 30
2. Crear un menu de comida saludable ["avena", "arroz integral", "leche"] (agregar mas elementos)
    imprimir los elementos del menu, en mayuscula con un foreach
3. definir una lista de estudiantes, con la estructura de nombre, y promedio (1 a 100) , 
    aplicar un filtro para seleccionar los estudiantes que estan con notas superiores al promedio, 
    (se debe calcular el promedio del grupo general)
*/