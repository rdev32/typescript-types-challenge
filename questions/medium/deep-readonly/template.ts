export type DeepReadonly<T> = T extends Function ? T : T extends Record<any, any> ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T
