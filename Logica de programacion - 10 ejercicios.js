/**
 * ? Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar.
 * ? La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas).
 * ? Si el parámetro de la operación no es válido que mande un error personalizado a la consola.
 */

function ejercicioUno(a, b, operador) {
  if (operador == 'sumar') {
    console.log(a + b);
  } else if (operador == 'restar') {
    console.log(a - b);
  } else if (operador == 'multiplicar') {
    console.log(a * b);
  } else if (operador == 'dividir') {
    console.log(a / b);
  } else {
    console.error(`El operador ${operador} no es válido!`);
  }
}

function ejercicioUnoConSwitch(a, b, operador) {
  switch (operador) {
    case 'sumar':
      return console.log(a + b);
    case 'restar':
      return console.log(a - b);
    case 'multiplicar':
      return console.log(a * b);
    case 'dividir':
      return console.log(a / b);
    default:
      console.error(`El operador ${operador} no es válido!`);
  }
}

// * Ejecucion de funciones
//ejercicioUno(20, 5, 'dividir');
//ejercicioUnoConSwitch(20, 5, 'dividir');

/**
 * ? Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.
 */

function ejercicioDos(a = 0, b = 0) {
  let numeros = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      numeros.push(i);
    }
  }
  console.log(numeros);
}

// * Ejecucion de funciones
//ejercicioDos(1, 20);

/**
 * ? Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.
 */

function ejercicioTres(a = 0, b = 12) {
  for (let i = 0; i <= b; i++) {
    if (i !== 5) {
      let num = `${i} x ${a} = ${a * i}`;
      console.log(num);
    }
  }
}

// * Ejecucion de funciones
//ejercicioTres(3, 10);

/**
 * ? Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100.
 */

function ejercicioCuatro() {
  let multiTres = [];
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
      multiTres.push(i);
    }
  }
  console.log(multiTres);
}

function ejercicioCuatroII() {
  let multiTres = [];
  for (let i = 0; i < 100; i++) {
    multiTres.push(i);
  }
  console.log(
    multiTres.filter(function (multiTres) {
      return multiTres % 3 === 0;
    })
  );
}

function ejercicioCuatroIII() {
  let numCien = [];
  let multiTres = [];
  for (let i = 0; i < 100; i++) {
    numCien.push(i);
  }

  numCien.filter(x => {
    if (x % 3 === 0) multiTres.push(x);
  });
  console.log(multiTres);
}

// * Ejecucion de funciones
//ejercicioCuatro();
//ejercicioCuatroII();
//ejercicioCuatroIII();

/**
 * ? Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saqué su mitad, el doble y su raíz cuadrada.
 */

function ejercicioCinco() {
  let numeroRandom = Math.floor(Math.random() * (1000 - 1) + 1);
  console.log(
    `El número al azar es ${numeroRandom}, su mitad es ${
      numeroRandom / 2
    }, su doble es ${numeroRandom * 2} y su raiz cuadrada es ${Math.sqrt(
      numeroRandom
    )}`
  );
}

// * Ejecucion de funciones
//ejercicioCinco();

/**
 * ?Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños, nos diga cuantos días faltan para el mismo.
 */

function ejercicioSeis(a) {
  let cumple = new Date(a);
  let hoy = new Date();
  let cuenta = Math.floor(
    (cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log(`Faltan ${cuenta} días para tu cumpleaños`);
}

// * Ejecucion de funciones
//ejercicioSeis('16 aug 2023');

/**
 * ? Realizar una función que, dado como dato de entrada una oración, nos devuelva un arreglo que contenga todas las palabras usadas en la oración.
 */

function ejercicioSiete(oracion) {
  let oracionArray = oracion.split(' ');
  console.log(oracionArray);
}

// * Ejecucion de funciones
//ejercicioSiete('Esta es una oracion a dividir');

/**
 * ? Crea 5 objetos y almacénalos en un arreglo, debes hacer una función para filtrar a todas las personas que tengan el nombre Luis y que esa misma función también muestre cuales son mayores de edad.
 */

function ejercicioOcho() {
  const personas = [
    {nombre: 'Luis', apellidos: 'Lopez', edad: 16},
    {nombre: 'Paco', apellidos: 'Calvo', edad: 24},
    {nombre: 'Ana', apellidos: 'Perez', edad: 23},
    {nombre: 'Luis', apellidos: 'Gomez', edad: 20},
  ];

  console.log('Personas que se llaman luis');
  personas.filter(e => {
    if (e.nombre === 'Luis') console.log(`${e.nombre} ${e.apellidos}`);
  });
  console.log('Personas mayores de edad');
  personas.filter(e => {
    if (e.edad >= 18)
      console.log(`${e.nombre} ${e.apellidos} con ${e.edad} años`);
  });
}

// * Ejecucion de funciones
//ejercicioOcho();

/**
 * ? Realizar una función que nos diga la fecha de apertura de un examen de la universidad, es decir, la cantidad de horas restantes que faltan para que abra dicho examen. En caso de que el examen haya cerrado que nos retorne un mensaje que diga “El examen ya cerró”.
 */

function ejercicioNueve(open = '', close = '') {
  if (open === '' || close === '') return console.warn('Faltan parametros');
  else {
    let today = new Date(),
      testOpen = new Date(open),
      testClose = new Date(close);

    if (testClose.getTime() < today.getTime()) {
      return console.log('El examen ya cerró!');
    } else {
      let resulTimeToOpen = Math.floor(
        (testOpen.getTime() - today.getTime()) / (1000 * 60)
      );

      let resulTimetoClose = Math.floor(
        (testClose.getTime() - today.getTime()) / (1000 * 60)
      );

      if (testOpen.getTime() < today.getTime()) {
        return console.log(
          `El examen ya empezó! Quedan ${resulTimetoClose} minutos para cerrar`
        );
      } else {
        console.log(
          `Faltan ${resulTimeToOpen} minutos para que abra el examen y ${resulTimetoClose} para cierre.`
        );
      }
    }
  }
}

// * Ejecucion de funciones
//ejercicioNueve('Wed Jun 28 2023 22:00:00', 'Wed Jun 28 2023 23:00:00');

/**
 * ? En un arreglo tenemos varios valores numéricos, debemos de hacer una función que nos elimine aquellos valores que se encuentran repetidos.
 */
const arrPrincipal = [1, 2, 3, 4, 3, 4, 5, 6, 2, 3, 8];

function ejercicioDiez(num) {
  let result = num.filter((item, index) => {
    return num.indexOf(item) === index;
  });

  console.log(result);
}

// otra forma de conseguir lo mismo
let newNums = new Set(arrPrincipal);
console.log(newNums);
let resultNums= [...newNums]
console.log(resultNums);

// * Ejecucion de funciones
ejercicioDiez(arrPrincipal); 


