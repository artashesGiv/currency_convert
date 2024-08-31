import { defineStore, storeToRefs } from 'pinia'
import { Stores } from '@/shared'
import { onMounted, ref, watch } from 'vue'
import { type RateDataKey, useCurrency } from '../lib'
import { useCurrencyRateStore } from './'

export const useCurrencyConvertStore = defineStore(
  Stores.CURRENCY_CONVERT,
  () => {
    const { allCurrenciesId } = useCurrency()
    const { rateData } = storeToRefs(useCurrencyRateStore())
    const { onLoadRateData } = useCurrencyRateStore()

    const fromCurrency = ref(allCurrenciesId[0])
    const toCurrency = ref(allCurrenciesId[1])

    const fromValue = ref<Maybe<number>>(null)
    const toValue = ref<Maybe<number>>(null)

    const convertFromValue = () => {
      const key = `${toCurrency.value}-${fromCurrency.value}` as RateDataKey

      if (rateData.value) {
        if (toValue.value) {
          fromValue.value = +(rateData.value[key] * toValue.value).toFixed(2)
        } else {
          fromValue.value = null
        }
      }
    }

    const convertToValue = () => {
      const key = `${fromCurrency.value}-${toCurrency.value}` as RateDataKey

      if (rateData.value) {
        if (fromValue.value) {
          toValue.value = +(
            rateData.value[key] * (fromValue.value || 1)
          ).toFixed(2)
        } else {
          toValue.value = null
        }
      }
    }

    watch(
      () => fromCurrency.value,
      () => convertFromValue(),
    )

    watch(
      () => toCurrency.value,
      () => convertToValue(),
    )

    onMounted(async () => {
      if (!rateData.value) {
        await onLoadRateData()
      }
    })

    return {
      fromCurrency,
      toCurrency,
      fromValue,
      toValue,
      convertFromValue,
      convertToValue,
    }
  },
)
