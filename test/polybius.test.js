const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("Checking to see if polybius works", () => {
  it("When encoding, should translate letters i and j to 42", () => {
    const actual = polybius("ij");
    const expected = "4242";
    expect(actual).to.eql(expected);
  });
});

describe("Checking to see if polybius works", () => {
  it("When decoding, should translate 42 to (i,j)", () => {
    const actual = polybius("42", false);
    const expected = "(i/j)";
    expect(actual).to.eql(expected);
  });
});

describe("Checking to see if polybius works", () => {
  it("When encoding it should ignore capital letters", () => {
    const actual = polybius("A Message");
    const expected = "11 23513434112251";
    expect(actual).to.eql(expected);
  });
});

describe("Checking to see if polybius works", () => {
  it("When encoding spaces should be maintained", () => {
    const actual = polybius("A Message");
    const expected = "11 23513434112251";
    expect(actual).to.eql(expected);
  });
});

describe("Checking to see if polybius works", () => {
  it("When decoding spaces should be maintained", () => {
    const actual = polybius("11 23513434112251", false);
    const expected = "a message";
    expect(actual).to.eql(expected);
  });
});
