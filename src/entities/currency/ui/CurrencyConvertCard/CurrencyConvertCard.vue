<template>
  <div class="currency-convert-card">
    <div class="currency-convert-card__input">
      <input-base
        v-model="fromValue"
        :is-disabled="isLoading"
        type="number"
        placeholder="Введите сумму"
        @update:model-value="convertToValue"
      />
      <currency-select v-model="fromCurrency" :is-disabled="isLoading" />
    </div>
    <div class="currency-convert-card__icon">
      <icon-base name="switch" />
    </div>
    <div class="currency-convert-card__input">
      <input-base
        v-model="toValue"
        :is-disabled="isLoading"
        type="number"
        placeholder="Введите сумму"
        @update:model-value="convertFromValue"
      />
      <currency-select v-model="toCurrency" :is-disabled="isLoading" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  CurrencySelect,
  useCurrencyConvertStore,
  useCurrencyRateStore,
} from '@/entities'
import { IconBase } from '@/shared'
import { storeToRefs } from 'pinia'

export type CurrencyConvertCardProps = {}

const { isLoading } = storeToRefs(useCurrencyRateStore())
const { fromCurrency, toCurrency, fromValue, toValue } = storeToRefs(
  useCurrencyConvertStore(),
)

const { convertFromValue, convertToValue } = useCurrencyConvertStore()
</script>

<style scoped lang="scss">
.currency-convert-card {
  @include column(20px);

  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 600px;
  height: 300px;
  border-radius: 30px;
  background-color: var(--black-color-2);

  &__input {
    @include row(20px);

    width: 100%;
  }

  &__icon {
    border: 2px solid var(--gray-color-1);
    color: var(--gray-color-1);
    padding: 10px;
    font-size: 16px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
}
</style>
