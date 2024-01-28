array = [10, 20, 20, 20, 10, 10, 30, 50, 10, 20];
num = array.length;

function sockMerchant(n, ar) {
  let rep = {};
  let par = 0;

  ar.forEach(function (numero) {
    if (rep[numero]) {
      rep[numero] += 1;
    } else {
      rep[numero] = 1;
    }
  });
  //   return rep;

  for (let el in rep) {
    par = par + Math.floor(rep[el] / 2);
  }
  return par;
}

const result = sockMerchant(num, array);
console.log(result);
