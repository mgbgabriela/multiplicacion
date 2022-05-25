/*Multiplicacion 
• Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos
*/
let dimension: number = Number(prompt("Ingrese la dimensión del arreglo"));
let arreglo1: number[] = new Array(dimension);
let arreglo2: number[] = new Array(dimension);
let arreglo3: number[] = new Array(dimension);
let arreglo4: number[] = new Array(dimension);

let cargarArreglo = (vector: number[], cantidad: number): number[] => {
  let indice: number;

  for (indice = 0; indice < cantidad; indice++) {
    vector[indice] = Number(prompt("Ingrese el valor para el vector" + indice));
  }
  return vector;
};

let multiplicarArreglo = (
  vector1: number[],
  vector2: number[],
  cantidad: number
): number[] => {
  let multiplicacion: number[] = new Array(cantidad);
  for (let indice: number = 0; indice < cantidad; indice++) {
    multiplicacion[indice] = vector1[indice] * vector2[indice];
  }
  return multiplicacion;
};

let resultado1: number[] = new Array(dimension);
let resultado2: number[] = new Array(dimension);
let resultadoTotal: number[] = new Array(dimension);

cargarArreglo(arreglo1, dimension);
cargarArreglo(arreglo2, dimension);
cargarArreglo(arreglo3, dimension);
cargarArreglo(arreglo4, dimension);

resultado1 = multiplicarArreglo(arreglo1, arreglo2, dimension);
resultado2 = multiplicarArreglo(arreglo3, arreglo4, dimension);
resultadoTotal = multiplicarArreglo(resultado1, resultado2, dimension);

console.log("El resultado de la multiplicación de " + resultadoTotal);
