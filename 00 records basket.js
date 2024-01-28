const arr1 = [12, 24, 10, 24];
const arr2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let maximun = scores[0];
  let minimun = scores[0];

  let max = 0;
  let min = 0;

  let result = [];

  //   for (let i = 1; i < scores.length; i++) {
  //     if (scores[i] > maximun) {
  //       maximun = scores[i];
  //       max++;
  //     } else if (scores[i] < minimun) {
  //       minimun = scores[i];
  //       min++;
  //     }
  //   }

  scores.forEach(score => {
    if (score < minimun) {
      minimun = score;
      min++;
    }
    if (score > maximun) {
      maximun = score;
      max++;
    }
  });

  result.push(max);
  result.push(min);
  return result;
}
