<!--info-header-start--><h1>Deep Readonly <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><p><a href="https://tsch.js.org/9/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possbile.

For example

```ts
type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

const todo: DeepReadonly<X> // should be same as `Expected`
```
