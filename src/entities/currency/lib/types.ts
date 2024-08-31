export type CurrencyCodes = 'rub' | 'usd' | 'eur'

export type ListCurrency = {
  id: CurrencyCodes
  text: string
  symbol: string
}

export type RateDataKey = `${CurrencyCodes}-${CurrencyCodes}`
export type RateData = Record<RateDataKey, number>
