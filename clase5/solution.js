// 3. crear una lista con 20 numeros, y calcular el promedio de la lista (usando bucles)
const lista_numeros = [
    15,12,14,18,3,6,9,8,5,2,5,6,4,7,5,8,9,6,3,2
];

let contador = 0;
let suma_total = 0;

lista_numeros.forEach(number => {
    contador = contador + 1;
    suma_total = suma_total + number;
});

console.log('contador', contador);
console.log('suma_total', suma_total);

const promedio = suma_total/contador;
console.log(promedio);