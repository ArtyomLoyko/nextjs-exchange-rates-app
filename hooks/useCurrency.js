import { useQueries } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchRates, fetchSymbols } from '../utils/fetchData'

const DEFAULT_AMOUNT = 1000
const DEFAULT_CURRENCY_ONE = 'USD'
const DEFAULT_CURRENCY_TWO = 'CHF'

export const useCurrency = () => {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT)
  const [currencyOne, setCurrencyOne] = useState(DEFAULT_CURRENCY_ONE)
  const [currencyTwo, setCurrencyTwo] = useState(DEFAULT_CURRENCY_TWO)

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ['rates', currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ data }) => data,
        keepPreviousData: true,
      },
      {
        queryKey: ['symbols'],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ data }) => data,
      },
    ],
  })

  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading)
  const isError = [ratesData, symbolsData].some((query) => query.isError)

  const convertedAmount =
    Math.floor(ratesData.data?.[currencyTwo] * amount * 100) / 100

  const rawDate = new Date(ratesData.dataUpdatedAt)
  const date = rawDate.toLocaleDateString()
  const time = rawDate.toLocaleTimeString('en-US')

  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {}

  return {
    amount,
    setAmount,
    currencyOne,
    setCurrencyOne,
    currencyTwo,
    setCurrencyTwo,
    ratesData,
    symbolsData,
    isLoading,
    isError,
    convertedAmount,
    date,
    time,
    currencyList,
  }
}
