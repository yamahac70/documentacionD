# Let
let es ahora preferible para la declaración de variables. No es una sorpresa, ya que es una mejora de las declaraciones con var. También resuelve el problema con var que acabamos de cubrir. Consideremos por qué esto es así.

## let tiene un ámbito de bloque
Un bloque es un trozo de código delimitado por {}. Un bloque vive entre llaves. Todo lo que está dentro de llaves es un bloque.

Así que una variable declarada en un bloque con let  solo está disponible para su uso dentro de ese bloque. Permíteme explicar esto con un ejemplo:
````
   let saludar = "dice Hola";
   let tiempos = 4;

   if (tiempos > 3) {
        let hola = "dice Hola tambien";
        console.log(hola);// "dice Hola tambien"
    }
   console.log(hola) // hola is not defined
````
Vemos que el uso de hola fuera de su bloque (las llaves donde se definió) devuelve un error. Esto se debe a que las variables let tienen un alcance de bloque.

## let puede modificarse pero no volver a declararse.
Al igual que var,  una variable declarada con let puede ser actualizada dentro de su ámbito. A diferencia de var, una variable let no puede ser re-declarada dentro de su ámbito. Así que mientras esto funciona:
````
    let saludar = "dice Hola";
    saludar = "dice Hola tambien";
````
esto devolverá un error:
````
    let saludar = "dice Hola";
    let saludar = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared
````
Sin embargo, si la misma variable se define en diferentes ámbitos, no habrá ningún error:
````
    let saludar = "dice Hola";
    if (true) {
        let saludar = "dice Hola tambien";
        console.log(saludar); // "dice Hola tambien"
    }
    console.log(saludar); // "dice Hola"
````
¿Por qué no hay ningún error? Esto se debe a que ambas instancias son tratadas como variables diferentes, ya que tienen ámbitos diferentes.

Este hecho hace que let sea una mejor opción que var. Cuando se utiliza let, no hay que preocuparse de sí se ha utilizado un nombre para una variable antes, puesto que una variable solo existe dentro de su ámbito.

Además, como una variable no puede ser declarada más de una vez dentro de un ámbito, entonces el problema discutido anteriormente que ocurre con var no sucede.

## Hoisting de let
Al igual que  var, las declaraciones let se elevan a la parte superior. A diferencia de var que se inicializa como undefined, la palabra clave let no se inicializa. Sí que si intentas usar una variable let antes de declararla, obtendrás un Reference Error.