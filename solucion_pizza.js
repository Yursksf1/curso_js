let pizza1 = 12.5
let pizza2 = 15 
let pizza3 = 22.5

let area1 = Math.PI * pizza1 ** 2 * 3;
let area2 = Math.PI * pizza2 ** 2 * 2;
let area3 = Math.PI * pizza3 ** 2 * 1;


console.log("Área 1:", area1);
console.log("Área 2:", area2);
console.log("Área 3:", area3);


let mayorArea = area1;
let mayorAreaNombre = "Área 1";

if (area2 > mayorArea) {
    mayorArea = area2;
    mayorAreaNombre = "Área 2";
}

if (area3 > mayorArea) {
    mayorArea = area3;
    mayorAreaNombre = "Área 3";
}

console.log(${mayorAreaNombre} es la mayor:, mayorArea)
