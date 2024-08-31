import { createApp } from 'vue'
import App from '@/app/App.vue'
import { ButtonBase, IconBase, SpinnerBase } from '@/shared'

export const create = () => {
  const app = createApp(App)

  app.component('IconBase', IconBase)
  app.component('ButtonBase', ButtonBase)
  app.component('SpinnerBase', SpinnerBase)

  return app
}
