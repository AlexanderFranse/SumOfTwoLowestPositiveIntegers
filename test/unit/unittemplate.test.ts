import {
  containArrayPositiveIntegers,
  getLowestNumber,
} from "../../src/functions";

describe(`A method is needed to determine the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
  No floats or non-positive integers will be passed`, () => {
  describe("To achieve this, validation is needed to see if all integers are positive values", () => {
    describe("All integers are positive. Validation passsed!", () => {
      it("[19, 5, 42, 2, 77] --> return true", () => {
        expect(containArrayPositiveIntegers([19, 5, 42, 2, 77])).toBe(true);
      });
    });
    describe("One integer contains float number. Validation failed", () => {
      it("[19, 5, 42, 2.0, 77] --> return false", () => {
        const floatNumber = 3.14;
        expect(
          containArrayPositiveIntegers([19, 5, 42, floatNumber, 77])
        ).toBeFalsy();
      });
    });
    describe("One integer contains 0. Validation failed", () => {
      it("[19, 5, 42, 0, 77] --> return false", () => {
        expect(containArrayPositiveIntegers([19, 5, 42, 0, 77])).toBeFalsy();
      });
    });
  });
  describe("Next step after the validation is determine the lowest value that the array contains", () => {
    it("[19, 5, 42, 2, 77] --> 2", () => {
      expect(getLowestNumber([19, 5, 42, 2, 77])).toBe(2);
    });
  });
});
