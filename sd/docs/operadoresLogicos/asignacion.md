# Operadores de asignación
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. Utilizamos operadores de asignación para asignar valores a las variables. JavaScript proporciona los siguientes operadores de asignación:
--------
## Operador de asignación (=) 
para asignar el valor del operando derecho al operando izquierdo.
````js
// Assigning 10 to a
let a = 10;
console.log(a);

Output:
10
````
## Operador de asignación de suma (+=) 
para sumar los valores de los operandos izquierdo y derecho y asignar el resultado al operando izquierdo.
````js
let a = 10;
let b = 5;
// Equivalent to a = a+b
a += b;
console.log(a);
Output:

15
````
## Operador de asignación de resta (-=) 
para restar el operando derecho del operando izquierdo y asignará el resultado al operando izquierdo.
````js
let a = 10;
let b = 5;
// Equivalent to a = a-b
a -= b;
console.log(a);

Output:
5
````
## Operador de asignación de multiplicación (*=) 
para multiplicar los valores de los operandos izquierdo y derecho y asigne el resultado al operando izquierdo.
````js
let a = 10;
let b = 5;
// Equivalent to a = a*b
a *= b;
console.log(a);
Output:
50
````
## Operador de asignación de división (/=) 
para dividir el valor del operando izquierdo por el valor del operando derecho y asignar el resultado al operando izquierdo.
````js
let a = 10;
let b = 5;
// Equivalent to a = a/b
a /= b;
console.log(a);

Output:
2
````
## Operador de asignación de resto (%=), 
divide el operando izquierdo por el operando derecho y asigna el resto al operando izquierdo.
````js
let a = 10;
let b = 5;
// Equivalent to a = a%b
a %= b;
console.log(a);

Output:
0
````
## Operador de Asignación de Exponenciación (**=), 
eleva el operando izquierdo a la potencia del operando derecho y asigna el resultado al operando izquierdo.
````js
let a = 10;
let b = 5;
// Equivalent to a = a**b
a **= b;
console.log(a);

Output:
100000
````
- Nota: Los operadores de asignación bit a bit o Bitwise (<<=, >>=, >>>=, &=, ^=, |=, &&=, ||=, ??=) que veremos más adelante funcionan de manera similar.