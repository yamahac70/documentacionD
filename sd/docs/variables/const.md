# Const
Las variables declaradas con const mantienen valores constantes. Las declaraciones const similitudes con las declaraciones let.

## Las declaraciones const tienen un ámbito de bloque
Al igual que las declaraciones let, solamente se puede acceder a las declaraciones const dentro del bloque en el que fueron declaradas.

## const no puede modificarse ni volver a declararse
Esto significa que el valor de una variable declarada con const s el mismo dentro de su ámbito. No se puede actualizar ni volver a declarar. Así que si declaramos una variable con const, no podemos hacer esto:
````
    const saludar = "dice Hola";
    saludar = "dice Hola tambien";// error: Assignment to constant variable. 
````
ni esto:
````
    const saludar = "dice Hola";
    const saludar = "dice Hola tambien";// error: Identifier 'saludar' has already been declared
````
Por lo tanto, toda declaración const, debe ser inicializada en el momento de la declaración.

Este comportamiento es algo diferente cuando se trata de objetos declarados con const. Mientras que un objeto const no se puede actualizar, las propiedades de este objeto sí se pueden actualizar. Como resultado, si declaramos un objeto const como este:
````
    const saludar = {
        mensaje: "dice Hola",
        tiempos: 4
    }
````
mientras que no podemos hacer esto:
````
    saludar = {
        palabras: "Hola",
        numero: "cinco"
    } // error:  Assignment to constant variable.
````
podemos hacer esto:
````
    saludar.mensaje = "dice Hola tambien";
Esto actualizará el valor de saludar.mensaje sin devolver errores.
````
## Hoisting de const
Al igual que let, const las declaraciones const se elevan a la parte superior, pero no se inicializan.