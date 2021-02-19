module.exports = function reverse (n) {
  // return parseInt(n.toString().split('').reverse().join(''));
  const moduleN = Math.abs(n);
  
  let degree = 1;
  while (moduleN % (10 ** degree) < moduleN) {
    degree += 1;
  }
  let variableDegree = degree - 1;
  let result = 0;

  for (let i = 10; i <= 10 ** degree; i *= 10) {
    result += Math.floor((moduleN % i) / (i / 10)) * (10 ** variableDegree);
    variableDegree -= 1;
  }

  return result;
}


// 251
//   % 10 === 1
//   % 100 === 51      n = 2
//   % 1000 === 251   