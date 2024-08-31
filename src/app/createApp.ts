import { createApp } from 'vue'
import App from '@/app/App.vue'
import { IconBase } from '@/shared'

export const create = () => {
  const app = createApp(App)

  app.component('IconBase', IconBase)

  return app
}
