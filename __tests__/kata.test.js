

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