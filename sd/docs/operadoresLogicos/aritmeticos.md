# Operadores Aritméticos
Con ellos podemos utilizar operadores aritméticos para realizar cálculos matemáticos en los operandos. JavaScript proporciona los siguientes operadores aritméticos:

## Operador de suma (+) para realizar sumas en los operandos.
````js
let a = 12;
let b = 10;
let result = a+b;
console.log(result)
console.log(1+2);
console.log(a+6);

Output
22
3
18
````
## Operador de sustracción (-) para restar el operando derecho del operando izquierdo.
````js
let a = 10;
let b = 4;
let result = a-b;
console.log(result);
console.log(23-20);

Output:
6
3
````
## Operador de multiplicación (*) para multiplicar los operandos.
````js
let a = 10;
let b = 4;
let result = a*b;
console.log(result);
console.log(23*20);

Output:

40
460
````
## Operador de división (/) para realizar la división en los operandos.
````js
let a = 10;
let b = 4;
let result = a/b;
console.log(result);
console.log(40/20);

Output:
2.5
2
````
## Operador de módulo (%). En informática, la operación módulo obtiene el resto entero de la división de un número entre otro.​
````js
let a = 10;
let b = 4;
let result = a%b;
console.log(result);
console.log(40%20);

Output:
2
0
````
## Operador de exponenciación (**) para calcular la base a la potencia del exponente (base^exponente).
````js
let a = 3;
console.log(a**4);

Output:
81
````
## Operador de incremento (++) para aumentar el valor entero en uno.
````js
let a = 3;
// Value of a=4 and returns 4
console.log(++a);
// Value of a=5 and returns 4
console.log(a++);
// Value of a=5 and returns 5
console.log(a);
Output:

4
4
5
````
## Operador de decremento (--) que disminuye el valor entero en uno.
````js
let a = 3;
// Value of a=2 and returns 2
console.log(--a);
// Value of a=1 and returns 2
console.log(a--);
// Value of a=1 and returns 1
console.log(a);
Output:

2
2
1
````
## Operador unario más (+) para intentar convertir el operando en un número si aún no lo es
````js
console.log(typeof("10"));
console.log(typeof(+"10"));
console.log(typeof(false));
console.log(typeof(+false));

Output:
string
number
boolean
number
````
## Operador de negación unaria (-), que devuelve la negación de su operando.
````js
let a = 10;
console.log(-a);

Output:
-10
````