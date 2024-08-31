import { defineStore } from 'pinia'
import { Stores } from '@/shared'
import { ref } from 'vue'
import type { CurrencyCodes } from '../lib'

type ListCurrency = {
  id: CurrencyCodes
  text: string
  symbol: string
}

export const useCurrentCurrencyStore = defineStore(
  Stores.CURRENCY_CURRENT,
  () => {
    const list: ListCurrency[] = [
      {
        id: 'rub',
        text: 'RUB',
        symbol: '₽',
      },
      {
        id: 'usd',
        text: 'USD',
        symbol: '$',
      },
      {
        id: 'eur',
        text: 'EUR',
        symbol: '€',
      },
    ]

    const allCurrenciesId = list.map(currency => currency.id)

    const currentCurrency = ref(list[0].id)

    return { list, currentCurrency, allCurrenciesId }
  },
)
