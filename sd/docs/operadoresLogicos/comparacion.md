# Operadores de comparación
Los operadores de comparación se utilizan para comparar operandos y devuelven un valor lógico (verdadero o falso) sobre la base de la comparación. JavaScript proporciona los siguientes operadores de comparación:

## Operador igual (==)
devuelve verdadero si los operandos son iguales. Solo compara los valores de los operandos, ignorando su tipo al comparar.
````js
console.log(2==4);
console.log("2"==2);

Output:
false
true
````
## Operador no igual (!=)
 devuelve verdadero si los operandos no son iguales. También ignora el tipo de operandos al comparar.
````js
console.log(2!=4);
console.log(2!="2");

Output:
true
false
````
## Operador de igualdad estricta (===)
devuelve verdadero si los operandos son iguales. Compara tanto los valores como los tipos de operandos mientras compara.
````js
console.log(2===4);
console.log("2"===2);

Output:
false
false
````
## Operador estricto no igual (!==)
devuelve verdadero si los operandos no son iguales. También compara ambos: los valores y el tipo de operandos mientras compara.
````js
console.log(2 !== 4);
console.log(2 !== "2");

Output:
true
true
````
## Operador mayor que (>)
 devuelve verdadero si el operando izquierdo es mayor que el operando derecho.
````js
console.log(10>4);
console.log(5>5);

Output:
true
false
````
## Operador mayor que o igual (>=)
devuelve verdadero si el operando izquierdo es mayor o igual que el operando derecho.
````js
console.log(10 >= 4);
console.log(5 >= 5);

Output:
true
true
````
## Operador menor que (<)
 devuelve verdadero si el operando izquierdo es menor que el operando derecho.
````js
console.log(10<4);
console.log(5<5);

Output:
false
false
````
## Operador menor o igual (<=)
devuelve verdadero si el operando izquierdo es menor o igual que el operando derecho.
````js
console.log(10 <= 4);
console.log(5 <= 5);

Output:
false
true
````