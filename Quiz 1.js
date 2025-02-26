//1. ¿Cuál es la salida de este código?
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
// 2 
//La salida es 2 porque solo imprime el valor de la segunda posicion del arreglo 

//¿Qué se imprimirá en la consola?
let x = 5;
let y = x++;
console.log(y);
// 5
// Imprime 5, porque ese fue el valor que y recibió antes de que x fuera incrementado.

//¿Cuál es la salida de este código?
let a = {};
let b = a;
console.log(a === b);
// Es true porque compara a es igual a b y así sucede en este caso

//¿Qué imprime este código en la consola?
console.log(typeof null);                        //(Typeof = Identificar el tipo de dato 'Number", string")
//object porque en js con el operador typeof devuelve "object" para null

//¿Qué devuelve este código?
console.log(typeof NaN);     //Nan = Not a number 
// number porque en js con el operador typeof devuelve "number" para NaN

//¿Cuál es la salida del siguiente código?
let x = 10;
(function() {
  console.log(x);
  let x = 20;
})();
// ReferenceError porque existe una variable x de forma global y la función tiene su propia versión de x

//¿Cuál es el resultado de la siguiente operación?
console.log(1 + '1' - 1);
//10 porque contantena los dos primeros valores [1 +1] = 11 y luego resta el valor que falta (-1) = 10 

//¿Qué retorna este código?
console.log([] == false);
// true porque el arreglo vacío [] se convierte en una cadena vacía "" y la cadena vacía "" es 
// considerada equivalente a false en una comparación de == 

//¿Cuál es la salida del siguiente código?
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
// [1, 2, 3, 4] porque accede al arreglo a pormedio de la referencia b y utiliza la funcion push para
// agregar un elemento mas al final del arreglo 

// ¿Cuál es el resultado de esta expresión?
console.log(0 == '0');
//true porque, al usar ==, JavaScript convierte la cadena '0' en el número 0, y luego compara 0 == 0, lo que es cierto.