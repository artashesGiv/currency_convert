<template>
  <header class="header">
    <div class="header__logo">
      <icon-base name="switch" />
    </div>
    <div class="header__navigation">
      <button-base
        v-for="item in navigate"
        :key="item.icon"
        :text="item.text"
        :icon="item.icon"
        :view="getViewButton(item.name)"
        @click="onNavigate(item.name)"
      />
    </div>
  </header>
</template>
<script setup lang="ts">
import {
  ButtonBase,
  type ButtonBaseProps,
  type IconsId,
  Routes,
  usePageData,
} from '@/shared'
import { useRouter } from 'vue-router'

export type HeaderAppProps = {}

const router = useRouter()

type Navigate = { name: Routes; text: string; icon: IconsId }

const navigate: Navigate[] = [
  {
    name: Routes.HOME,
    text: usePageData(Routes.HOME).navigate!,
    icon: 'home',
  },
  {
    name: Routes.CONVERT,
    text: usePageData(Routes.CONVERT).navigate!,
    icon: 'switch',
  },
]

const getViewButton = (name: Routes): ButtonBaseProps['view'] => {
  if (router.currentRoute.value.name === name) {
    return 'brand'
  }

  return 'secondary'
}

const onNavigate = (name: Routes) => {
  router.push({ name })
}
</script>

<style scoped lang="scss">
.header {
  @include row(40px);

  padding: 0 40px;
  align-items: center;
  height: 120px;
  border-radius: 0 0 20px 20px;
  background-color: var(--black-color-3);

  &__logo {
    border: 3px solid var(--brand-color);
    border-radius: 50%;
    padding: 10px;

    i {
      font-size: 50px;
      color: var(--brand-color);
    }
  }

  &__navigation {
    @include row(40px);
    flex-grow: 1;
  }
}
</style>
