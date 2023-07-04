function buscaPrimos(a, b) {
  let resultPrimos = [];
  for (let i = a; i <= b; i++) {
    let primo;
    if (i <= 1) {
      primo = false;
    } else if (i == 2 || i == 3) {
      primo = true;
    } else {
      for (let it = 2; it <= i / 2; it++) {
        if (i % it === 0) {
          primo = false;
        } else {
          primo = true;
        }
      }
    }
    if (primo === true) {
      resultPrimos.push(i);
    }
  }
  console.log(resultPrimos);
  console.log(`Hay un total de ${resultPrimos.length}`);
}

buscaPrimos(1, 99);
