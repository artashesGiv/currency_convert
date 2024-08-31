<template>
  <page-layout>{{ title }}</page-layout>
</template>

<script setup lang="ts">
import { usePageData } from '@/shared'
import { PageLayout } from '@/widgets'

const { title } = usePageData()
</script>

<style scoped></style>
