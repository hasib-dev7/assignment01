# Why `any` is a Type Safety Hole and Why `unknown` is Safer

## Introduction

In TypeScript, type safety is one of the biggest advantages over JavaScript. However, using the type `any` can break this safety system. That’s why `any` is often called a "type safety hole". On the other hand, `unknown` is considered a safer alternative for handling unpredictable data.

In this blog, we will understand why `any` is dangerous, why `unknown` is better, and how type narrowing helps us work safely with unknown values.

## Why `any` is Dangerous (Type Safety Hole)

```ts
let data: any;

data = "Hello";
data = 123;

data.toUpperCase();
```

## Why `unknown` is Safer

```ts
let data: unknown;

data = "Hello";
data = 123;

// data.toUpperCase(); ❌ error
```

## Type Narrowing Concept

```ts
function processData(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

## Conclusion

- `any` disables type safety ❌
- `unknown` keeps safety ✅
- Type narrowing helps safely use data
