// Problem 01
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

//  Problem 02
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
