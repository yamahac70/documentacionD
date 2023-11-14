# Variables

Var
Antes de la llegada de ES6, las declaraciones var eran las que mandaban. Sin embargo, hay problemas asociados a las variables declaradas con var. Por eso fue necesario que surgieran nuevas formas de declarar variables. En primer lugar, vamos a entender más sobre var antes de discutir esos problemas.

## Ámbito de var
El ámbito, significa esencialmente dónde están disponibles estas variables para su uso. Las declaraciones var tienen un ámbito global o un ámbito de función/local.

El ámbito es global cuando una variable var se declara fuera de una función. Esto significa que cualquier variable que se declare con var fuera de una función está disponible para su uso en toda la pantalla.

var tiene un ámbito local cuando se declara dentro de una función. Esto significa que está disponible y solo se puede acceder a ella dentro de esa función.

Para entenderlo mejor, mira el siguiente ejemplo.
````js

    var saludar = "hey, hola";
    
    function nuevaFuncion() {
        var hola = "hola";
    }

````

Aquí, saludar tiene un ámbito global porque existe fuera de la función mientras que hola tiene un ámbito local. Así que no podemos acceder a la variable hola fuera de la función. Así que si realizamos esto:
````js
    var tester = "hey, hola";
    
    function nuevaFuncion() {
        var hola = "hola";
    }
    console.log(hola); // error: hola is not defined
````
Obtendremos un error que se debe a que hola no está disponible fuera de la función.

Las variables con var se pueden volver a declarar y modificar
Esto significa que podemos hacer esto dentro del mismo ámbito y no obtendremos un error.
````js
    var saludar = "hey, hola";
    var saludar = "dice Hola tambien";
````
y esto también
````js
    var saludar = "hey, hola";
    saludar = "dice Hola tambien";
````
## Hoisting de var
Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la parte superior de su ámbito antes de la ejecución del código. Esto significa que si hacemos esto:
````js
    console.log (saludar);
    var saludar = "dice hola"
````
se interpreta así:
````js
    var saludar;
    console.log(saludar); // saludar is undefined
    saludar = "dice hola"
````
Entonces las variables con var se elevan a la parte superior de su ámbito y se inicializan con un valor de undefined.

## Problema con var
Hay una debilidad que viene con  var. Usaré el ejemplo de abajo para explicarlo:
````js
    var saludar = "hey, hola";
    var tiempos = 4;

    if (tiempos > 3) {
        var saludar = "dice Hola tambien"; 
    }
    
    console.log(saludar) // "dice Hola tambien"
````