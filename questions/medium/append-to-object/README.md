<!--info-header-start--><h1>Append to object <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/></h1><p><a href="https://tsch.js.org/527/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field

For example

```ts
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
```
