<template>
  <page-layout class="convert">
    <currency-convert-card />
  </page-layout>
</template>

<script setup lang="ts">
import { PageLayout } from '@/widgets'
import { CurrencyConvertCard } from '@/entities'
</script>

<style scoped lang="scss">
.convert {
  @include column;

  align-items: center;
  justify-content: center;
}
</style>
