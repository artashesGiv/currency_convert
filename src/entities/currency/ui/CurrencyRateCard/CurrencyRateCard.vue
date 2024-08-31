<template>
  <div class="currency-rate-card">
    <transition name="fade" mode="out-in">
      <div :key="currentCurrency" class="currency-rate-card__content">
        <div
          v-for="(value, key) in getRateByCurrentCurrency"
          :key="key"
          class="currency-rate-card__item"
        >
          1 {{ key }} = <strong>{{ value }}</strong> {{ currentCurrency }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCurrencyRateStore, useCurrentCurrencyStore } from '@/entities'

export type CurrencyRateCardProps = {}

const { getRateByCurrentCurrency } = storeToRefs(useCurrencyRateStore())
const { currentCurrency } = storeToRefs(useCurrentCurrencyStore())
</script>

<style scoped lang="scss">
.currency-rate-card {
  @include column;

  justify-content: center;
  padding: 20px;
  width: 600px;
  height: 300px;
  border-radius: 30px;
  background-color: var(--black-color-2);

  &__content {
    @include column(12px);
  }

  &__item {
    text-align: center;
    font-size: 24px;
    font-weight: 500;

    strong {
      font-weight: 600;
      color: var(--brand-color-light);
    }
  }
}
</style>
