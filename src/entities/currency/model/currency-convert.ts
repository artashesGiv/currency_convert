import { defineStore, storeToRefs } from 'pinia'
import { Stores } from '@/shared'
import { onMounted, type Ref, ref, watch } from 'vue'
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

    // Общая функция для конвертации значений
    const convertValue = (
      sourceValue: Ref<Maybe<number>>,
      targetValue: Ref<Maybe<number>>,
      sourceCurrency: Ref<string>,
      targetCurrency: Ref<string>,
    ) => {
      const key =
        `${sourceCurrency.value}-${targetCurrency.value}` as RateDataKey

      if (rateData.value) {
        if (sourceValue.value) {
          if (sourceCurrency.value === targetCurrency.value) {
            targetValue.value = sourceValue.value
          } else {
            targetValue.value = +(
              rateData.value[key] * sourceValue.value
            ).toFixed(2)
          }
        } else {
          targetValue.value = null
        }
      }
    }

    // Используем общую функцию для конвертации из toCurrency в fromCurrency
    const convertFromValue = () => {
      convertValue(toValue, fromValue, toCurrency, fromCurrency)
    }

    // Используем общую функцию для конвертации из fromCurrency в toCurrency
    const convertToValue = () => {
      convertValue(fromValue, toValue, fromCurrency, toCurrency)
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
