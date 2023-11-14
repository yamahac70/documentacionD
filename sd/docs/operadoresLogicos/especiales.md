# Operadores Especiales
## Operador Ternario

- El operador ternario es la abreviatura de la instrucción if-else. Asigna valor a una variable en base a una condición, la sintaxis de la misma es:
````js
condition ? value1 : value2
Si la condición es verdadera, el operador devuelve el valor de value1. De lo contrario, devuelve el valor de value2.

let result = (200>100) ? "Yes" : "No";
console.log(result);
Output:Yes
Operador Typeof
````
Se utiliza para encontrar el tipo de datos de un valor o variable.
````js
console.log(typeof(100));
console.log(typeof("100"));

Output:
number
string
````