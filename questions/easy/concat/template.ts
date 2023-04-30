// T and U are arrays so lets merge them into one
export type Concat<T extends any[], U extends any[]> = [...T, ...U]