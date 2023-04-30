type F = 0 | false | [] | { [key: string]: never } | undefined | null | ''
export type AnyOf<T extends readonly any[]> = T[number] extends F ? false : true