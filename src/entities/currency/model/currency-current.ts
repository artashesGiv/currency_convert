import { defineStore } from 'pinia'
import { Stores } from '@/shared'
import { ref } from 'vue'
import { useCurrency } from '../lib'

export const useCurrentCurrencyStore = defineStore(
  Stores.CURRENCY_CURRENT,
  () => {
    const { list } = useCurrency()

    const currentCurrency = ref(list[0].id)

    return { currentCurrency }
  },
)
