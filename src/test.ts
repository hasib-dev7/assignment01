const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProperty(user, "name"));
