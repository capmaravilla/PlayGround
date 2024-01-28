// * #1 ---------------------------------------------------------------

// function dayOfProgrammer(year) {
//   // Write your code here
if (year === 1918) {
  return `23.09.1918`;
} else if (year < 1918) {
  if (year % 4 === 0) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
} else if (year > 1918) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
}
// }

const resultado = dayOfProgrammer(1919);
console.log(resultado);

// * #2 ---------------------------------------------------------------
function dayOfProgrammer(year) {
  let leap = year % 4 == 0;
  if (year >= 1918) leap = year % 400 == 0 || (leap && year % 100 != 0);
  let day = leap ? 12 : 13;
  if (year == 1918) day += 13;
  return `${day}.09.${year}`;
}
