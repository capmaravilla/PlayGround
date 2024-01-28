const arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(a) {
  let resultado = [];
  for (let iv = 0; iv < 4; iv++) {
    for (let i = 0; i < 4; i++) {
      resultado.push(
        a[iv][i] +
          a[iv][i + 1] +
          a[iv][i + 2] +
          a[iv + 1][i + 1] +
          a[iv + 2][i] +
          a[iv + 2][i + 1] +
          a[iv + 2][i + 2]
      );
    }
  }
  return Math.max(...resultado);
}

hourglassSum(arr1);
