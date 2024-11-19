let numero = parseInt(prompt("Ingresa un número entre 1 y 1000:"));

if (numero >= 1 && numero <= 1000) {
    let resultado = numero;

    let multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < multiplicadores.length; i++) {
        
        console.log(`${multiplicadores[i]}x ${resultado}`);
        resultado *= multiplicadores[i];
    }

    multiplicadores.forEach(function(divisor) {
        resultado /= divisor;
        console.log(`${divisor}/ ${resultado.toFixed()}`);
    });

} else {
    console.log("Por favor, ingresa un número válido entre 1 y 1000.");
}
