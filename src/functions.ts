export function isIntegerGreaterThanZero(x: number[]): boolean {
  return x.every((element) => element > 0);
}

export function isInteger(x: number[]): boolean {
  return x.every((element) => Number.isInteger(element));
}
export function validatePositiveIntegers(x: number[]): boolean {
  return isIntegerGreaterThanZero(x) && isInteger(x);
}

export function getLowestNumber(x: number[]) {
  return Math.min(...x);
}

export function getSecondLowestNumber(x: number[]) {
  return x.sort((a, b) => a - b)[1];
}

export function getSumOfLowestValueAndSecondLowestValue(x: number[]) {
  if (validatePositiveIntegers(x) === false) {
    throw new Error("Array does not contain only positive");
  }
  return getLowestNumber(x) + getSecondLowestNumber(x);
}
