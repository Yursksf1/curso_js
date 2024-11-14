// Creación de una lista
const fruits = ['Manzana', 'Banana', 'Naranja'];

// Agregar elementos a la lista
fruits.push('Fresa'); // Agrega 'Fresa' al final
fruits.unshift('Mango'); // Agrega 'Mango' al inicio

// Eliminar elementos de la lista
fruits.pop(); // Elimina el último elemento ('Fresa')
fruits.shift(); // Elimina el primer elemento ('Mango')

console.log("Lista final de frutas:", fruits);


// ordenar
// Ordenar alfabéticamente
fruits.sort();
console.log("Ordenado alfabéticamente:", fruits); // ['Banana', 'Fresa', 'Mango', 'Manzana', 'Naranja']

// Ordenar en orden inverso
fruits.reverse();
console.log("Ordenado en orden inverso:", fruits); // ['Naranja', 'Manzana', 'Mango', 'Fresa', 'Banana']


// consultar si un elemento esta
console.log("¿Está 'Mango' en la lista?", fruits.includes('Mango')); // true o false
console.log("¿Está 'Uva' en la lista?", fruits.includes('Uva')); // false

// encontrar la posicion en la lista
console.log("Índice de 'Banana':", fruits.indexOf('Banana')); // Índice o -1 si no está
console.log("Índice de 'Uva':", fruits.indexOf('Uva')); // -1 (no está en la lista)



// filtros
const filteredFruits = fruits.filter(fruit => fruit.includes('a'));
console.log("Frutas que contienen la letra 'a':", filteredFruits);


const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Lista en mayúsculas:", upperCaseFruits);

fruits.forEach((fruit, index) => {
    console.log(`Fruta en índice ${index}: ${fruit}`);
});