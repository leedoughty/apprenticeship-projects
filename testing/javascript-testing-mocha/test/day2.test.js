import { expect } from "chai";
import day2 from "../src/day2";

describe("day 2 tests", () => {
  describe("check data type", () => {
    it("should return undefined if no parameter passed", () => {
      expect(day2()).to.be.undefined;
    });

    it("should return a string when a string is passed", () => {
      expect(day2("a string")).to.be.a("string");
    });

    it("should return a number when a number is passed", () => {
      expect(day2(42)).to.be.a("number");
    });

    it("should not be a string when a number is passed", () => {
      expect(day2(10)).to.not.be.a("string");
    });
  });

  describe("checking equals", () => {
    it("should equal the string passed", () => {
      expect(day2("same string")).to.equal("same string");
    });

    it("should deep equal the object passed", () => {
      const givenObject = {
        name: "lee",
      };

      expect(day2(givenObject)).to.deep.equal(givenObject);
    });
  });

  describe("checking contains", () => {
    it("should contain part of the string passed", () => {
      expect(day2("hello world")).to.contain("world");
    });
  });

  describe("checking errors", () => {
    it('should throw an error when "error" is passed', () => {
      function wrappedFunction() {
        day2("error");
      }

      expect(wrappedFunction).to.throw("Cannot pass error");
    });
  });
});
