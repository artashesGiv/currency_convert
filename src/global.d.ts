export {}

declare global {
  type Maybe<T> = null | undefined | T
  type Timeout = ReturnType<typeof setTimeout>
}
