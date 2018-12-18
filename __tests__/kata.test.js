

const kata = require("../kata");



// test("check listNum returns an array", () => {
// expect(kata.listNum()).toBeInstanceOf(Array);
// });

// test("check the listNum array isn't empty", () =>{
//     expect(kata.listNum().length).not.toEqual(0);
// });

// test("list numbers below 1000 that are multiples of 3 or 5", () => {
// expect(kata.listNum()[2]).toBe(6);
// expect(kata.listNum()[3]).toBe(9);
// });

test("check listNum returns the sum of multiples of 3 or 5 under 1000", () => {
    expect(kata.listNum()).toBe(233168);
});

test("fib returns fibonacci sequence up to 4 million", () => {
    expect(kata.fib()[18]).toBe(kata.fib()[17] + kata.fib()[16]);
});

test("sumEvenFib returns the sum of the even fibonacci numbers below 4 million", () => {
    expect(kata.sumEvenFib()).toBe(4613732);
});

test("check isPalindrome correctly checks if a number is a palindrome or not", () => {
    expect(kata.isPalindrome(35155153)).toBe(true);
    expect(kata.isPalindrome(1598234)).toBe(false);
    expect(kata.isPalindrome(3)).toBe(true);
    expect(kata.isPalindrome(24)).toBe(false);
    expect(kata.isPalindrome(906609)).toBe(true);
});

test("check largestPal returns the largest palindrome that is a product of two 3 digit numbers", () =>{
    expect(kata.largestPal()).toBe(906609);
});

test("check 232792560 returns true in isDivis", () => {
    expect(kata.isDivis(232792560)).toBe(true);
    expect(kata.isDivis(4)).toBe(false);
});

test("check smallDivis returns 23279256", () =>{
    expect(kata.smallDivis()).toBe(232792560);
});

test("check sumOfSquares returns right answer", () => {
    expect(kata.sumOfSquares()).toBe(338350);
});

test("check squareOfSums returns right answer", () => {
    expect(kata.squareOfSums()).toBe(25502500);
});

test("test if checkPrime works", () => {
    expect(kata.checkPrime(3)).toBe(true);
    expect(kata.checkPrime(9)).toBe(false);
    expect(kata.checkPrime(2)).toBe(true);
    expect(kata.checkPrime(0)).toBe(false);
    expect(kata.checkPrime(1)).toBe(false);

});
