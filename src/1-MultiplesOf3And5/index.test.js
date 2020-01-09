const assert = require("assert");
const { multiplesOf3And5 } = require("./index.js");

it("multiplesOf3and5(1000) should return 233168.", () => {
  assert.strictEqual(multiplesOf3And5(1000), 233168);
});

it("multiplesOf3and5(49) should return 543.", () => {
  assert.strictEqual(multiplesOf3And5(49), 543);
});

it("multiplesOf3and5(19564) should return 89301183.", () => {
  assert.strictEqual(multiplesOf3And5(19564), 89301183);
});

it("multiplesOf3and5(8456) should return 16687353.", () => {
  assert.strictEqual(multiplesOf3And5(8456), 16687353);
});
