const assert = require("assert");
const { evenFibonacciNumbers } = require("./index.js");

it("fiboEvenSum(10) should return 44.", () => {
  assert.strictEqual(evenFibonacciNumbers(10), 44);
});

it("fiboEvenSum(18) should return 3382.", () => {
  assert.strictEqual(evenFibonacciNumbers(18), 3382);
});

it("fiboEvenSum(23) should return 60696.", () => {
  assert.strictEqual(evenFibonacciNumbers(23), 60696);
});

it("fiboEvenSum(43) should return 350704366.", () => {
  assert.strictEqual(evenFibonacciNumbers(43), 350704366);
});
