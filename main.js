const camino = 'UDDUUDDUDUUUD';
const camino2 = 'UDDDUDUU';

const camino3 = 'UUDDDUDUU';
const resultado = camino3.replace(/^U+/, '');

console.log(resultado);

console.log(camino2);

function countingValleys(steps, path) {
  const path2 = path.replace(/^U+|D+$/g, '');

  let count = 0;

  for (let k = 0; k < path2.length - 1; k++) {
    if (path2[k] === 'U' && path2[k + 1] === 'D') {
      count++;
    }
  }

  console.log(count);
}

const result = countingValleys(camino.length, camino);
console.log(result);

/*    
          UDDDUDUU = 1

          _/\      _ 
             \    /
              \/\/
          
          DDUUDDUDUUUD = 2

         _          /\_
          \  /\    /
           \/  \/\/
*/
