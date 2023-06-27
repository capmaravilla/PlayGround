const armas = ['espada', 'lanza', 'hacha'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const gente = [
  {nombre: 'Madmartigan', edad: 47, raza: 'Humano'},
  {nombre: 'Erk', edad: 34, raza: 'Elfo'},
  {nombre: 'Willow', edad: 45, raza: 'Enano'},
];

const armasMayusculas = armas.map(arma => {
  return arma.toUpperCase();
});

const armasMayusculas2 = armas.map(arma => arma.replace('a', '4'));
const numerosDuplicados = numeros.map(x => x * 2);
const numerosDuplicados2 = numeros.map(x => {
  return x * 2;
});

console.log(armasMayusculas);
console.log(armasMayusculas2);
console.log(numerosDuplicados);

function piedraPapelTijeras(gameArray) {
  let player01 = 0;
  let player02 = 0;

  gameArray.map(([P1, P2]) => {
    if (P1 === '🗿' && (P2 === '✂️' || P2 === '🦎')) {
      P1 = P1++;
    } else if (P1 === '📄' && (P2 === '🗿' || P2 === '🖖')) {
      P1 = P1++;
    } else if (P1 === '✂️' && (P2 === '📄' || P2 === '🦎')) {
      P1 = P1++;
    } else if (P1 === '🦎' && (P2 === '📄' || P2 === '🖖')) {
      P1 = P1++;
    } else if (P1 === '🖖' && (P2 === '🗿' || P2 === '✂️')) {
      P1 = P1++;
    } else if (P2 === '📄' && (P1 === '🗿' || P1 === '🖖')) {
      P2 = P2++;
    } else if (P2 === '✂️' && (P1 === '📄' || P1 === '🦎')) {
      P2 = P2++;
    } else if (P2 === '🗿' && (P1 === '✂️' || P1 === '🦎')) {
      P2 = P2++;
    } else if (P2 === '🦎' && (P1 === '📄' || P1 === '🖖')) {
      P2 = P2++;
    } else if (P2 === '🖖' && (P1 === '🗿' || P1 === '✂️')) {
      P2 = P2++;
    }
  });
}
