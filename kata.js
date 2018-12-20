const listNum = () => {
  let numbers = [];
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numbers.push(i);
    }
  }

  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum;
};

const fib = () => {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;
  for (i = 2; fibArray[i - 1] < 4000000; i++) {
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  }
  return fibArray;
};

const evenFib = () => {
  const even = fib().filter(number => number % 2 === 0);
  return even;
};

const sumEvenFib = () => {
  const sum = evenFib().reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sum;
};

const checkPrime = num => {
  if (num === 2) {
    return true;
  }
  if (num === 0 || num === 1) {
    return false;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const largeFactor = () => {
  const bigNum = 600851475143;

  for (let i = bigNum - 1; i > 0; i--) {
    if (bigNum % i === 0) {
      if (checkPrime(i)) {
        return i;
      }
    }
  }
  return 0;
};

const highFactor = () => {
  let originalTarget = 600851475143;
  let target = originalTarget;
  let i = 2;
  while (i < target) {
    while (target % i === 0) {
      (function(newtarget) {
        target = newtarget;
      })(target / i);
    }
    i++;
  }
  console.log(target);
  return target;
};

//Problem 4

const isPalindrome = num => {
  const number = num.toString();
  if (
    number ===
    number
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  }
  return false;
};

const largestPal = () => {
  let max = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      let product = i * j;

      if (isPalindrome(product)) {
        if (max < product) {
          max = product;
        }
      }
    }
  }
  console.log(max);
  return max;
};

//problem 5

const isDivis = num => {
  let i = 1;
  while (i < 21) {
    if (num % i !== 0) {
      return false;
    }
    i++;
  }
  return true;
};

const smallDivis = () => {
  let i = 1;
  while (!isDivis(i)) {
    i++;
  }
  console.log(i);
  return i;
};

//Problem 6

const sumOfSquares = () => {
  let sum = 0;
  for (i = 1; i < 101; i++) {
    sum = sum + i * i;
  }
  return sum;
};

const squareOfSums = () => {
  let sum = 0;
  let i = 1;
  while (i <= 100) {
    sum += i;
    i++;
  }
  return sum * sum;
};

const diff = () => {
  return squareOfSums() - sumOfSquares();
};

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const prime = () => {
  const primes = [];
  let i = 0;
  while (primes.length < 10002) {
    if (checkPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes[10000];
};

//problem 8
const thirteen = () => {
  const number =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  let max = 0;
  console.log(number);
  let product = 0;

  for (let i = 0; i < number.length - 13; i++) {
    const smallArray = number.slice(i, i + 13);
    product = smallArray[0];
    for (let j = 1; j < smallArray.length; j++) {
      product = product * smallArray[j];
      if (max < product) {
        max = product;
      }
    }
  }
  console.log(max);
};

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pyTrip = () => {
  let a = 0;
  let b = 1;
  let c = 2;

  while (a < 1000) {
    while (b < 1000 && b > a) {
      c = 1000 - a - b;
      if (c <= b) {
        break;
      }
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
      b++;
    }
    a++;
    b = a + 1;
  }
};

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const primeSum = () => {
  let sumOfPrimes = 0;
  for (let i = 2; i < 2000000; i++) {
    if (checkPrime(i)) {
      sumOfPrimes += i;
    }
  }
  console.log(sumOfPrimes);
};



const greatestProduct = () => {
  let max = 0;
  let product = 0;
  const rows = 19;
  const columns =  19;
  const grid = 
  [[08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]];

  


for (let i = 0; i <= rows; i++) {
  for (let j = 0; j < columns; j++) {
    if (j < columns - 3) {
      // Horizontal
      product = grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
      if (product > max) {
        max = product;
      }
    }
    if (i < rows - 3) {
      // Vertical
      product = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
      if (product > max) {
        max = product;
      }
      // Diagonally to the right
      if (j < columns - 3) {
        product = grid[i][j] * grid[i + 1][j + 1] * grid[i + 2][j + 2] * grid[i + 3][j + 3];
        if (product > max) {
          max = product;
        }
      }
      // Diagonally to the left
      if (j > 3) {
        product = grid[i][j] * grid[i + 1][j - 1] * grid[i + 2][j - 2] * grid[i + 3][j - 3];
        if (product > max) {
          max = product;
        }
      }
    }
  }
}
console.log(max);
};




module.exports = {
  listNum: listNum,
  fib: fib,
  sumEvenFib: sumEvenFib,
  isPalindrome: isPalindrome,
  largestPal: largestPal,
  isDivis: isDivis,
  smallDivis: smallDivis,
  sumOfSquares: sumOfSquares,
  squareOfSums: squareOfSums,
  checkPrime: checkPrime
};
