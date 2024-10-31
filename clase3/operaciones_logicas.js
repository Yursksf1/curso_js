// Igualdad

8 == 8 // true
8 != 9 // true
8 != 8 // false

// mayor o menor > <
5>3 // true
5>5 // false
5>=5 // true
15>5 // true
15>115 // false

6<12 // true
16<12 // false
16<=16 // true

/*OPERACIONES LOGICAS
Negación (!): Invierte el valor de verdad de una proposición.
Conjunción (&&): Verdadero si ambas proposiciones son verdaderas.
Disyunción (||): Verdadero si al menos una proposición es verdadera.
*/

// Negaciones
!false //true
!true //false

// Conjunción (&&) y Disyunción (||)
true && false // false
true || false // true


/*
Ejercicio:
1. crea un programa que retorne la opreacion contraria a la que ingrese el usuario
ejemplo:
si el usuario ingresa "true" el programa debe imprimir false
si el usuario ingresa "false" el programa debe imprimir true

2. Crea un progrma en Js que le solicite al usuario la edad
- el programa debe validar si la persona es mayor de edad o no

3. evalua la siguiente expresion de logica:
P = true
Q = False

a que equivale
- (p o no q)
- (no p o no (q y p))
*/