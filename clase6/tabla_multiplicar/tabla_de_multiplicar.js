function generarTabla(){
    let numero = parseInt(document.getElementById("numero").value)
    if (numero >= 1 && numero <= 10) {
    
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            const linea = `${numero} x ${i} = ${resultado} <br />`
            console.log(linea);
            document.getElementById("tabla1").textContent += linea 
            document.getElementById("tabla").innerHTML += linea 
        }
    } else {
        console.log("Por favor, ingresa un número válido entre 1 y 10.")
    }    
}

