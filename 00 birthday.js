arr = [1, 2, 1, 3, 2];
b1 = 3;
b2 = 2;

function birthday(s, d, m) {
  let resultado = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let suma = [];

    for (let j = i; j < i + m; j++) {
      suma.push(s[j]);
    }
    if (suma.reduce((acc, el) => acc + el) === d) {
      resultado++;
    }
  }
  console.log(resultado);
}

birthday(arr, b1, b2);
