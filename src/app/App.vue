<template>
  <header>
    <router-link :to="{ name: Routes.HOME }">
      {{ usePageData(Routes.HOME)?.navigate }}
      <icon-base name="convert" />
    </router-link>
    <router-link :to="{ name: Routes.CONVERT }">
      {{ usePageData(Routes.CONVERT)?.navigate }}
      <icon-base name="convert" />
    </router-link>
  </header>
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
import { Routes, usePageData } from '@/shared'
</script>
