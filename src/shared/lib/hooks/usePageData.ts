import {
  type RouteLocationNormalizedLoadedGeneric,
  type RouteRecordNormalized,
  useRoute,
  useRouter,
} from 'vue-router'
import { type Routes } from '../types'

export const usePageData = (
  name?: Routes,
): ReturnType<typeof useRoute>['meta']['data'] => {
  let route: RouteRecordNormalized | RouteLocationNormalizedLoadedGeneric

  if (name) {
    const router = useRouter()
    const routes = router.getRoutes()

    route = routes.find(route => route.name === name)!
  } else {
    route = useRoute()
  }

  return route.meta.data
}
