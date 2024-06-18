import { FC, PropsWithChildren } from 'react'

export type FCC<T> = FC<PropsWithChildren<T>>

export type ExtractValues<Obj extends object, Keys extends keyof Obj = keyof Obj> = Obj extends never
    ? never
    : { [Key in Keys]: Obj[Key] extends object ? ExtractValues<Obj[Key]> : Obj[Key] }[Keys]
