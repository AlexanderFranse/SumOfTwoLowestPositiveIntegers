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
