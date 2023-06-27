// * PROGRAMACION FUNCIONAL EN JS

// Ejemplos de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const personas = [
  {nombre: 'Ana', edad: 28, profesion: 'camarero'},
  {nombre: 'Juan', edad: 35, profesion: 'cocinero'},
  {nombre: 'María', edad: 42, profesion: 'cocinero'},
];

const frutas = ['manzana', 'pera', 'plátano', 'kiwi'];

const mixto = [1, 'hola', true, {nombre: 'Juan', edad: 35}];

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// * FILTER

const numerosFiltrados = numeros.filter(x => x < 5);
const personasFiltrados = personas.filter(x => x.edad < 40);
const personasFiltrados2 = personas.filter(x => x.profesion == 'cocinero');

// * MAP

const numerosMap = numeros.map(x => x * 2);
const numerosMap2 = numeros.map(x => [x, x]);
const personasMap = personas.map(x => x.nombre);
const personasMap2 = personas.map(x => x.edad * 2);

// * REDUCE
//reducer = (acumulador, elemento interando) => nuevo acc

const numerosReduce = numeros.reduce((acc, el) => acc + el, 0);
const indexed = personas.reduce((acc, el) => ({...acc, [el.nombre]: el}), {});
const anidado = [1, [2, 3], 4, [5]];
// [1, 2, 3, 4, 5]
const plano = anidado.reduce((acc, el) => acc.concat(el), []);

// *   RECURSIVIDAD

const cuentaRegresiva = a => {
  if (a < 0) return;
  //console.log(a);
  return cuentaRegresiva(a - 1);
};

cuentaRegresiva(10);

// * Trampolines

function suma(number, sum = 0) {
  if (number === 0) {
    num;
  } else {
    () => suma(number - 1, sum + number);
  }
}


