const camino = 'UDDUUDDUDUUUD';
const camino2 = 'UDDDUDUU';

function countingValleys(steps, path) {
  let currentLevel = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    currentLevel = path[i] === 'U' ? currentLevel + 1 : currentLevel - 1;
    if (currentLevel === -1 && path[i] === 'D') {
      valleys = valleys + 1;
    }
  }
  return valleys;
}

const resultado = countingValleys(10, camino);
console.log(resultado);

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
