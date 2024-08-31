<template>
  <div>{{ title }}</div>
</template>

<script setup lang="ts">
import { usePageData } from '@/shared'

const { title } = usePageData()
</script>

<style scoped></style>
