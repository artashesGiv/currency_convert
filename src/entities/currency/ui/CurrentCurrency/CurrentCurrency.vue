<template>
  <div class="current-currency">
    <select-base
      v-model="currentCurrency"
      :options="options"
      class="header__current-currency-select"
    />
  </div>
</template>
<script setup lang="ts">
import { type SelectBaseProps } from '@/shared'
import { useCurrentCurrencyStore } from '@/entities'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export type CurrentCurrencyProps = {}

const { currentCurrency } = storeToRefs(useCurrentCurrencyStore())
const { list } = useCurrentCurrencyStore()

const options = computed<SelectBaseProps['options']>(() => {
  return list.map(currency => ({
    id: currency.id,
    text: `${currency.text} ${currency.symbol}`,
  }))
})
</script>

<style scoped lang="scss">
.current-currency {
  min-width: 120px;
}
</style>
