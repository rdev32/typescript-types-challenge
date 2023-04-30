type IsLetter<T extends string> = Uppercase<T> extends T ? false : true

export type CapitalizeWords<
  S extends string, 
  NewWord extends boolean = true, 
  NewString extends string = ''
> = S extends `${infer First}${infer Rest}`
? IsLetter<First> extends true 
  ? NewWord extends true 
    ? CapitalizeWords<Rest, false, `${NewString}${Uppercase<First>}`>
    : CapitalizeWords<Rest, false, `${NewString}${First}`>
  : CapitalizeWords<Rest, true, `${NewString}${First}`>
: NewString