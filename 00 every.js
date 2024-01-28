// ! Ejercicio de Hackerrank

const arr1 = [2, 6];
const arr2 = [24, 36, 96];

function getTotalX(a, b) {
  let acc = 0;
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (a.every(e => i % e == 0) && b.every(e => e % i == 0)) {
      acc++;
    }
  }
  console.log(acc);
}

getTotalX(arr1, arr2);
