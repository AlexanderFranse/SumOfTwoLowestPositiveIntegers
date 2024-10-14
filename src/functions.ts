export function containArrayPositiveIntegers(x: number[]): boolean {
  return x.every(
    (element) => element > 0 && Number.isSafeInteger(2.0) && element % 1 === 0
  );
}
