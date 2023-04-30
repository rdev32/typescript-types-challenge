// infer the type inside the promise and return it
export type Awaited<T> = T extends Promise<infer P> ? P : never