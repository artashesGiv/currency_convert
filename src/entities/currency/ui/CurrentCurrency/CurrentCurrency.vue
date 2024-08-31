<template>
  <currency-select v-model="currentCurrency" />
</template>
<script setup lang="ts">
import { CurrencySelect, useCurrentCurrencyStore } from '@/entities'
import { storeToRefs } from 'pinia'

export type CurrentCurrencyProps = {}

const { currentCurrency } = storeToRefs(useCurrentCurrencyStore())
</script>
