export type If<C extends Boolean, T extends any, F extends any> = C extends true ? T : F
