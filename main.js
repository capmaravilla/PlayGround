const array = [1, 2, 3, 1, 4, 1, 'id', 3, 4, 1, 3, 2];

let repeticiones = {};
let pares = 0;

array.forEach(function (el) {
  if (repeticiones[el]) {
    repeticiones[el]++;
  } else {
    repeticiones[el] = 1;
  }
});

for (let par in repeticiones) {
  pares = pares + Math.floor(repeticiones[par] / 2);
}

// console.log(repeticiones);
// console.log(pares);

const obj = {
  id: 4,
  name: 'David',
};

obj.id = 6;

obj.id++;

array.forEach(function (el) {
  if (obj[el]) {
    obj[el]++;
  } else {
    obj[el] = 1;
  }
});

console.log(obj);
