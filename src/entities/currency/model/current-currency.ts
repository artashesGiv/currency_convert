import { defineStore } from 'pinia'
import { Stores } from '@/shared'
import { ref } from 'vue'

export const useCurrentCurrencyStore = defineStore(
  Stores.CURRENT_CURRENCY,
  () => {
    const list = [
      {
        id: 1,
        text: 'RUB ₽',
      },
      {
        id: 2,
        text: 'USD $',
      },
      {
        id: 3,
        text: 'EUR €',
      },
    ]

    const currentCurrency = ref(list[0].id)

    return { list, currentCurrency }
  },
)
