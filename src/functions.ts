export function containArrayPositiveIntegers(x: number[]): boolean {
  return x.every((element) => Number.isInteger(element) && element % 1 === 0);
}
