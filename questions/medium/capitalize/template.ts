export type Capitalize<S extends string> = S extends `${infer H}${infer B}` ? `${Uppercase<H>}${B}` : S
// H is head, B for body