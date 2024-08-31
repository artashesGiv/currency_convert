import type { ListCurrency } from './'

export const useCurrency = () => {
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

  return {
    list,
    allCurrenciesId,
  }
}
