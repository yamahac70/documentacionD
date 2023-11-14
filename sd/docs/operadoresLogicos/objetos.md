# Tipo de datos de objeto en JavaScript
En JavaScript, los objetos son colecciones de pares clave-valor, donde la clave es una cadena y el valor puede ser cualquier tipo de datos.
----
- Puede crear un objeto vacío en JavaScript usando la sintaxis de "constructor de objetos" (nuevo Objeto()) o la sintaxis de "objeto literal" (llaves {...}).
````js
let obj1 = new Object();
let obj2 = {};
Cada objeto contiene una lista opcional de propiedades, donde una propiedad es un par clave:valor. Puede acceder a los valores del objeto mediante la notación de puntos o la notación tipo matriz (corchetes).

let obj = {
"key1" : "value1",
"key2" : "value2"
}
console.log(obj.key1);
console.log(obj["key2"]);
Output:

value1
value2
````