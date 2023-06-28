import Axios from 'axios'

const converterApi = Axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_CURRENCY_API}`,
  baseURL: 'https://api.freecurrencyapi.com/v1',
  params: {
    // apikey: process.env.NEXT_PUBLIC_CURRENCY_API_KEY,
    apikey: 'EDdXtDmCV9wLQuMdmjTSIZ631II20pMYldSAgfss',
  },
})

export const fetchRates = async (currencyOne) => {
  const { data } = await converterApi.get('/latest', {
    params: {
      base_currency: currencyOne,
    },
  })

  return data
}

export const fetchSymbols = async () => {
  const { data } = await converterApi.get('/currencies')

  return data
}
