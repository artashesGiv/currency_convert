<template>
  <div class="current-currency">
    <select-base
      v-model="currentCurrency"
      :options="list"
      class="header__current-currency-select"
    />
  </div>
</template>
<script setup lang="ts">
import { SelectBase } from '@/shared'
import { useCurrentCurrencyStore } from '@/entities'
import { storeToRefs } from 'pinia'

export type CurrentCurrencyProps = {}

const { currentCurrency } = storeToRefs(useCurrentCurrencyStore())
const { list } = useCurrentCurrencyStore()
</script>

<style scoped lang="scss">
.current-currency {
  min-width: 120px;
}
</style>
