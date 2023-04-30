export type CamelCase<S extends string, Prev extends string = ''> = S extends `${infer F}${infer R}`
? Uppercase<F> extends Lowercase<F>
  ? `${Prev}${CamelCase<R, F>}`
  : Prev extends '_'
  ? `${CamelCase<R, Uppercase<F>>}`
  : `${Prev}${CamelCase<R, Lowercase<F>>}`
: Prev;