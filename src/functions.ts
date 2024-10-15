export function validatePositiveIntegers(x: number[]): boolean {
  return x.every(
    (element) => element > 0 && Number.isSafeInteger(2.0) && element % 1 === 0
  );
}

export function getLowestNumber(x: number[]) {
  return Math.min(...x);
}
