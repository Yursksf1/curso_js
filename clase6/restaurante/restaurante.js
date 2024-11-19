// Solicitar el total de la cuenta al usuario
const totalCuenta = parseFloat(prompt("Ingresa el total de la cuenta en el restaurante:"));
let totalNeto = totalCuenta * 0.3  // ganancia neta es del 30% del valor de la cuenta
let descuento_porcentual = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
const totalDescuento = totalNeto * (1 - (descuento_porcentual / 100))

// Calcular la propina (15%)
let propina = totalCuenta * 0.15;
let totalPagar = totalCuenta - totalDescuento

// Calcular el total a pagar (cuenta + propina)
 totalPagar = totalPagar + propina;

// Mostrar el resultado en la consola
console.log("Total de la cuenta: $" + totalCuenta.toFixed(2));
console.log("Propina (15%): $" + propina.toFixed(2));
console.log("Descuento: -$" + totalDescuento.toFixed(2));
console.log("Total a pagar: $" + totalPagar.toFixed(2));


