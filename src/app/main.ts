import '@/app/styles/index.scss'
import { createPinia } from 'pinia'
import { create } from './createApp'
import { router } from './providers/router'
import { clickOutside } from './directives'

const app = create()

app.use(createPinia())
app.directive('click-outside', clickOutside)
app.use(router)

app.mount('#app')
