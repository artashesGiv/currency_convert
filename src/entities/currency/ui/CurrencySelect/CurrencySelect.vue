<template>
  <select-base
    v-model="model"
    :options="options"
    :is-disabled="isDisabled"
    is-non-rest
    class="currency-select"
  />
</template>
<script setup lang="ts">
import { useCurrency } from '@/entities'
import { computed } from 'vue'
import type { SelectBaseProps } from '@/shared'

export type CurrencySelectProps = {
  modelValue: SelectBaseProps['modelValue']
  isDisabled?: boolean
}

defineProps<CurrencySelectProps>()
const model = defineModel<CurrencySelectProps['modelValue']>()

const { list } = useCurrency()

const options = computed<SelectBaseProps['options']>(() => {
  return list.map(currency => ({
    id: currency.id,
    text: `${currency.text} ${currency.symbol}`,
  }))
})
</script>

<style scoped lang="scss">
.currency-select {
  max-width: 120px;
}
</style>
