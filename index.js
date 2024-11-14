/*=============================
=            CAJERO            =
=============================*/
//let hora = parseInt(prompt('Digita las horas trabajadas: '));
//let valor = parseFloat(prompt('Digite el valor de hora: '));

/*Condiciones:
○   El cajero debe entregar la menor cantidad de billetes posible.
○   Las denominaciones de billetes disponibles en el cajero son:
■   100 mil - 100 USD
■   50 mil - 50 USD
■   20 mil - 20 USD
■   10 mil - 10 USD
*/
//SOLICITAR DINERO
alert("Bienvenido a su cajero automatico, por favor siga las siguientes intrucciones: ")
alert("1. Debe retirar cantidades mayor o iguales a 10 ")
alert("2. Debe retirar cantidades multiplos de 10 ")

/* CAPTURA DEL MONTO EN LA VARIABLE CASH*/
let cash = parseInt(prompt('Escriba la cantidad de dinero a retirar')); 
/* VARIABLES BILLETES DISPONIBLES Y SE INICAN OTRAS VARIABLES EN CEROS (0) PARA INICIAR CONTADOR DE CADA UNA DE ELLAS*/
var cien = 100, cinco = 50, dos = 20, uno = 10, entregar = 0,cienT = 0, cincoT = 0, dosT = 0, unoT = 0 
/* CALCULAR LOS MULTIPLOS DE 10*/
let mod = cash % 10;

if(cash < 10 ){ /* SABER SI ES MAYOR A 10*/
    alert("POR FAVOR DEBE INGRESAR CANTIDAD DE DINERO A RETIRAR MAYOR O IGUAL A 10");
    window.location.reload();

}else if(mod >= 1){ /* SABER SI ES MULTIPLO DE 10*/
    alert("POR FAVOR DEBE INGRESAR CANTIDAD DE DINERO MULTIPLO DE 10");
    window.location.reload();
}
else{ /* SI PASA LAS DOS ANTERIORES INGRESA AL PROCESO DEL CONTEO DE LOS BILLETES*/

    var i = 0 /* SE INICIALIZA VARIABLE I EN 0 (cero)*/

    /*
    Ejemplo iteraciones
    cash: 680
    1) cash = 580
        cienT=1
    2) cash = 480
        cienT=2
    3) cash = 380
        cienT=3
    4) cash = 280
        cienT=4
    5) cash = 180
        cienT=5
    6) cash = 80
        cienT=6
    7) cash = 30
        cincoT=1
    8) cash = 10
        dosT=1
    9) cash = 0
        unoT=1

    */

    while(i < cash) /* START CICLO WHILE Y/O MIENTRAS QUE*/ 
    { 
        /* PROCESO REPETITIVO HASTA QUE FINALICE EN CERO LA VARIABLE CASH Y NOS CUENTE LOS BILLETES A ENTREGAR*/
        /* REALIZA ITERACION EN CADA IF O ELSE IF SEGUN CONTENGA EL VALOR DE LA VARIABLE CASH Y SUMA DE 1 EN 1 EN LAS VARIABLES DEFINIDAS ANTERIORMENTE COMO CONTADORES (cienT = 0, cincoT = 0, dosT = 0, unoT = 0 ) LAS CUALES INICIARON EN CERO*/
        if(cash >= cien){
            entregar = cash - cien;
            cash = entregar
            cienT++;
        }else if(cash >= cinco){
            entregar = cash - cinco;
            cash = entregar
            cincoT++;
        }else if(cash >= dos){
            entregar = cash - dos;
            cash = entregar
            dosT++;
        }else if(cash >= uno){
            entregar = cash - uno;
            cash = entregar
            unoT++;
        }
    } /* END CICLO WHILE Y/O MIENTRAS QUE*/

    /* IF ELSE NECESARIOS PARA MOSTRAR LOS BILLETES A USARSE Y NO MOSTRAR LOS QUE ESTAN EN CERO O NO USADOS*/
    if(cienT >= 1){
        var cieT = cienT + " Billete(s) de $100 USD "
        console.log(cieT)
    }else{var cieT = ""}
    
    if(cincoT >= 1){
        var cinT = cincoT + " Billete(s) de $50 USD "
        console.log(cinT)
    }else{var cinT = ""}

    if(dosT >= 1){
        var dsT = dosT + " Billete(s) de $20 USD "
        console.log(dsT)
    }else{var dsT = ""}

    if(unoT >= 1){
        var unT = unoT + " Billete(s) de $10 USD"
        console.log(unT)
    }else{var unT = ""}

    //alert (cienT + " Billetes de 100/" + cincoT + " Billetes de 50/" + dosT + " Billetes de 20/" + unoT + " Billetes de 10");
    alert(cieT+" "+cinT+" "+dsT+" "+unT) /* ALERT PARA MOSTRAR TAMBIEN EN PANTALLA LOS QUE MOSTRAREMOS EN LA CONSOLA*/
    window.location.reload();
}  