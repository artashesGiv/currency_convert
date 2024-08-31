<template>
  <header-app />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade-page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HeaderApp } from '@/widgets'
</script>

<style scoped lang="scss">
main {
  height: calc(100% - var(--header-height));
}
</style>
