const alternateCase = require("../challenge");
const { expect } = require("chai");

describe("alternateCase", () => {
  it("will return an empty string when given an empty string", () => {
    expect(alternateCase("")).to.equal("");
  });
  it("will return one character as a capital letter", () => {
    expect(alternateCase("a")).to.equal("A");
    expect(alternateCase("B")).to.equal("B");
  });
  it("will return a single word with its characters alternating cases", () => {
    expect(alternateCase("hello")).to.equal("HeLlO");
    expect(alternateCase("world")).to.equal("WoRlD");
  });

  it("will return multiple words with their characters alternating cases whilst ignoring whitespaces", () => {
    expect(alternateCase("hello world")).to.equal("HeLlO wOrLd");
    expect(alternateCase("TOM IS COOL")).to.equal("ToM iS cOoL");
  });
});
