<template>
  <div>{{ data.title }}</div>
</template>

<script setup lang="ts">
import { usePageData } from '@/shared'

const data = usePageData()
</script>

<style scoped></style>
