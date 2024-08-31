<template>
  <header>
    <router-link :to="{ name: Routes.HOME }">
      {{ usePageData(Routes.HOME).navigate }}
      <icon-base name="convert" />
    </router-link>
    <router-link :to="{ name: Routes.CONVERT }">
      {{ usePageData(Routes.CONVERT).navigate }}
      <icon-base name="convert" />
    </router-link>
  </header>
</template>
<script setup lang="ts">
import { Routes, usePageData } from '@/shared'

export type HeaderAppProps = {}
</script>
