export type LengthOfString<S extends string, T extends readonly string[] = []> = S extends '' ? T['length'] : S extends `${infer H}${infer B}` ? LengthOfString<B, [...T, H]> : never