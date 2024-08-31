export {}

declare module 'vue-router' {
  interface RouteMeta {
    middleware?: unknown
    data: {
      title: string
      navigate?: string
    }
  }
}
