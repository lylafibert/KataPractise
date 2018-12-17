
const listNum = () => {
    let numbers = [];
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numbers.push(i);
        }
    };

    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);


    return sum;
};

const fib = () => {
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    for (i = 2; fibArray[i - 1] < 4000000; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
    };
    return fibArray;
};

const evenFib = () => {
    const even = fib().filter(number => number % 2 === 0);
    return even;
};

const sumEvenFib = () => {
    const sum = evenFib().reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
};

const checkPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        } else if (num === 0 || num === 1) {
            return false
        } else {
            return true;
        }
    }
};

const largeFactor = () => {
    const bigNum = 600851475143;
    
    for (let i = bigNum - 1; i > 0; i--) {

        if (bigNum % i === 0) {
            if(checkPrime(i)) {
                return i;
            }   
        }
    };
    return 0;

};

const highFactor = () =>{
let originalTarget = 600851475143;
let target = originalTarget;
let i = 2;
while (i < target) {
    while (target % i === 0) {
        (function (newtarget) {
            target = newtarget;
        })(target / i)
    }
    i++;
}
console.log(target);
return target;
};


highFactor();


module.exports = {
    listNum: listNum,
    fib: fib,
    sumEvenFib: sumEvenFib
};