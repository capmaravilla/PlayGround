const array = [1, 2, 3, 1, 2, 1, 1, 1];

function numPares(ar) {
  let rep = {};
  let par = 0;
  ar.forEach(el => {
    if (ar[el]) {
      ar[el]++;
    } else {
      ar[el] = 0;
    }
  });
  for(num in rep){
    par = par + Math.floor(rep[num]/2)
  }
  return par
}

const resultado = numPares(array)
console.log(resultado);