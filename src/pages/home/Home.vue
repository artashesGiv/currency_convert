<template>
  <page-layout class="home">
    <transition name="fade" mode="out-in">
      <spinner-base
        v-if="isLoading"
        view="light"
        size="xxl"
        class="home__spinner"
      />
      <currency-rate-card v-else />
    </transition>
  </page-layout>
</template>

<script setup lang="ts">
import { CurrencyRateCard, useCurrencyRateStore } from '@/entities'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { PageLayout } from '@/widgets'
import { SpinnerBase } from '@/shared'

const { onLoadRateData } = useCurrencyRateStore()
const { isLoading } = storeToRefs(useCurrencyRateStore())

onMounted(async () => {
  await onLoadRateData()
})
</script>

<style scoped lang="scss">
.home {
  @include column;

  align-items: center;
  justify-content: center;

  &__spinner {
    @include center;
  }
}
</style>
