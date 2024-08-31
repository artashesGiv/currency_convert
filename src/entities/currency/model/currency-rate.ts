import { baseApi, Stores } from '@/shared'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import type { CurrencyCodes, RateData, RateDataKey } from '../lib'
import { useCurrentCurrencyStore } from './'
import { useCurrency } from '@/entities/currency/lib/hooks'

export const useCurrencyRateStore = defineStore(Stores.CURRENCY_RATE, () => {
  const isLoading = ref(true)
  const rateData = ref<Maybe<RateData>>(null)

  const { currentCurrency } = storeToRefs(useCurrentCurrencyStore())
  const { allCurrenciesId } = useCurrency()

  const onLoadRateData = async () => {
    try {
      const { data } = await baseApi.get<RateData>('')

      rateData.value = Object.fromEntries(
        Object.entries(data).filter(([key, _value]) => {
          const [from, to] = key.split('-') as [CurrencyCodes, CurrencyCodes]

          return allCurrenciesId.includes(from) && allCurrenciesId.includes(to)
        }),
      ) as RateData
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const getRateByCurrentCurrency = computed(() => {
    if (rateData.value) {
      return Object.fromEntries(
        Object.entries(rateData.value)
          .filter(([key, _value]) => {
            const [_from, to] = currencyRateKeySplit(key as RateDataKey)
            return to === currentCurrency.value
          })
          .map(([key, value]) => [
            currencyRateKeySplit(key as RateDataKey, 1),
            value.toFixed(2),
          ]),
      )
    }

    return []
  })

  return {
    isLoading,
    rateData,
    onLoadRateData,
    getRateByCurrentCurrency,
  }
})

const currencyRateKeySplit = (key: RateDataKey, position?: 1 | 2) => {
  if (position) {
    return key.split('-')[position - 1]
  }

  return key.split('-')
}
