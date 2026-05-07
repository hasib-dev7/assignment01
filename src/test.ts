type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string | number {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}
console.log(checkType(2));
