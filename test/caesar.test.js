const expect = require("chai").expect;
const { caesar } = require("../src/caesar.js");

describe("Check if input is valid", () => {
  it("Return false if shift value is not present", () => {
    const actual = caesar("message");
    expect(actual).to.be.false;
  });
});

describe("Check if input is valid", () => {
  it("Return false if shift value 0", () => {
    const actual = caesar("message", 0);
    expect(actual).to.be.false;
  });
});

describe("Check if input is valid", () => {
  it("Return false if shift value less than -25", () => {
    const actual = caesar("message", -26);
    expect(actual).to.be.false;
  });
});

describe("Check if input is valid", () => {
  it("Return false if shift value greater than 25", () => {
    const actual = caesar("message", 26);
    expect(actual).to.be.false;
  });
});

describe("Check if shift works properly", () => {
  it("should return correct encoded message that goes past the end of the alphabet", () => {
    const actual = caesar("Zebra Magazine", 3);
    const expected = "cheud pdjdclqh";
    expect(actual).to.eql(expected);
  });
});

describe("Check if shift works properly", () => {
  it("should return encoded message that maintain spaces and other nonalphabetic symbols", () => {
    const actual = caesar("Zebra Magazine?", 3);
    const expected = "cheud pdjdclqh?";
    expect(actual).to.eql(expected);
  });
});

describe("Check if shift works properly", () => {
  it("should return correct encoded message where capital letters can be ignored", () => {
    const actual = caesar("Zebra Magazine?", 3);
    const expected = "cheud pdjdclqh?";
    expect(actual).to.eql(expected);
  });
});

describe("Checking if Caesar shift works properly", () => {
  it("should return decoded message that maintains spaces and other nonalphabetic symbols.", () => {
    const actual = caesar("cheud pdjdclqh!", 3, false);
    const expected = "zebra magazine!";
    expect(actual).to.eql(expected);
  });
});
