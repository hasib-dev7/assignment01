// Problem 01
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

//  Problem 02
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

//  Problem 03
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string | number {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

//  Problem 04
const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Problem 05
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// Problem 06
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 07
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((n) => arr2.includes(n));
}
