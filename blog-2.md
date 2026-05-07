# How Generics Enable Reusable and Strictly Typed Components in TypeScript

## Introduction

Generics in TypeScript allow us to create reusable functions while keeping type safety.

## Basic Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

## Without Generics Problem

```ts
function getString(value: string): string {
  return value;
}
```

## With Generics Solution

```ts
function getValue<T>(value: T): T {
  return value;
}
```

## Generic Array Example

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

## Generic Interface

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}
```

## Conclusion

- Generics = reusable code
- Keeps type safety
- Used in real-world TypeScript apps
