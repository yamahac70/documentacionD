## Operador lógico AND (&&)
Este operador lógico compara dos expresiones. Si la primera se evalúa como "verdadera" (truthy), la sentencia devolverá el valor de la segunda expresión. Si la primera expresión se evalúa como "falsa"(falsy), la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.
````
true && true //devuelve el segundo valor, verdadero
true && false //devuelve el segundo valor, falso
false && false //devuelve el primer valor, falso
123 && 'abc' // devuelve el segundo valor, 'abc'
'abc' && null //devuelve el segundo valor, nulo
undefined && 'abc' //devuelve el primer valor, indefinido
0 && false //devuelve el primer valor, 0
````
## Operador lógico OR ( || )

Este operador lógico compara dos expresiones. Si la primera se evalúa como "falsa", la sentencia devolverá el valor de la segunda expresión. Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.
````
true || true //devuelve el primer valor, verdadero
true || false //devuelve el primer valor, verdadero
false || false //devuelve el segundo valor, falso
123 || 'abc' //devuelve el primer valor, 123
'abc' || null //devuelve el primer valor, 'abc'
undefined || 'abc' //devuelve el segundo valor, 'abc'
0 || false //devuelve el segundo valor, falso
````
Evaluación de "corto circuito"
&& y || funcionan como operadores de corto circuito.

Con el operador lógico AND, si el primer operando se devuelve como falso, el segundo nunca será evaluado y se devolverá el primer operando.

Con el operador lógico OR, si el primer valor se devuelve como verdadero, el segundo nunca será evaluado y el primer operando será devuelto.

## Operador lógico NOT (!)
El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR. Además, se opera en solo un operando.

Se utiliza un símbolo "!" (signo de exclamación) para representar un operador NOT.

Usos del operador NOT
Convertir la expresión en un booleano.
Devolver el valor contrario del booleano obtenido en el último paso.
````
var spam = 'rinki'; //spam puede ser igual a cualquiera de las cadenas de texto no vacías
var booSpam = !spam;
/*devuelve falso
  porque la string vacía al convertirse en un booleano se devuelve como verdadera y lo contrario se devuelve como falso 
*/

var spam2 = ''; //spam2 es igual a una cadena de texto vacía
var booSpam2 = !spam2;
/*devuelve verdadero
  porque la cadena de texto vacia al convertirse en un booleano se devuelve como falsa y lo contrario se devuelve como verdadero.
*/
````
Consejo:

Ambos operadores lógicos devolverán el valor de la última expresión. Por ejemplo:
````
"gato" && "perro" //devuelve "perro"
"gato" && false //devuelve falso
0 && "gato"  //devuelve 0 (que es un valor falso)

"gato" || "perro" //devuelve "gato"
"gato" || false //devuelve "gato"
0 || "gato" //devuelve "gato"
````
Ten en cuenta que && devuelve el primer valor, mientras que || devuelve el segundo valor y vice versa.


(fuentes)[https://www.freecodecamp.org/espanol/news/author/mailentranslations/]
