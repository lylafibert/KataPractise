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
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
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

  while (a < 1000 ) {
    while (b < 1000 && b > a) {
     c = 1000 - a - b;
     if(c <= b){
       break;
     }
     if(a*a + b*b === c*c){
       return a*b*c;
     }
      b++;
    }
    a++;
    b = a + 1;
  }
};

console.log(pyTrip());

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
