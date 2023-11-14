# Tipos de datos 

Un tipo de datos sirve para definir el tipo y el comportamiento de los datos: En otras palabras, con esto podemos decirle al compilador o al intérprete cómo pretendemos usar una parte de los datos. La mayoría de los lenguajes de programación admiten tipos de datos básicos como números, booleanos, cadenas, etc.

En JavaScript podemos decir que admite ocho tipos de datos: número, BigInt, booleano, string o cadena, valor nulo, indefinido, símbolo y objeto.

- Número (number): El tipo number representa tanto números enteros como de punto flotante.
- BigInt: En JavaScript, el tipo “number” no puede representar valores enteros mayores que (253-1) (eso es 9007199254740991), o menor que -(253-1) para negativos. Es una limitación técnica causada por su representación interna. Para la mayoría de los propósitos es suficiente, pero a veces necesitamos números realmente grandes. Por ejemplo, para criptografía o marcas de tiempo de precisión de microsegundos.
- String: Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.
- Boolean (tipo lógico): El tipo booleano tiene sólo dos valores posibles: true y false.
El valor “null” (nulo): El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.
El valor “undefined” (indefinido): El valor especial undefined también se distingue. Hace un tipo propio, igual que null. El significado de undefined es “valor no asignado”.
- Object y Symbol: El tipo object (objeto) es especial. Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas. El tipo symbol (símbolo) se utiliza para crear identificadores únicos para los objetos.
------
Para simplificarlo un poco más los tipos de datos en JavaScript se pueden clasificar ampliamente en dos categorías: tipos de datos primitivos y tipos de datos no primitivos. Donde un objeto es un tipo de datos no primitivo o complejo, y el resto son tipos de datos primitivos.

Pero algo que debemos tener en cuenta en JavaScript, y que a veces complica las cosas un poco, es que se trata de un lenguaje de tipo dinámico, lo que significa que los tipos de variables se comprueban durante el tiempo de ejecución. La misma variable puede contener valores de diferentes tipos en cualquier momento.

Por ejemplo:
````js
// x es un string o cadena
let x = "Hola Mundo";
// x es un número
x = 100;
// x es un booleano
x = true;
````
Esto hace que si bien el programa no se romperá durante su tiempo de ejecución como ocurre en Java, si podemos encontrar comportamientos inesperados si no tenemos claro cómo trabajar con los diferentes tipos de operadores.