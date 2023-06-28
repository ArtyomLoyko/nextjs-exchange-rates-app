import { Grid } from '@mui/material'

import Option from './Option'
import Input from './Input'
import Rate from './Rate'

const CurrencyConverter = ({
  amount,
  setAmount,
  currencyOne,
  setCurrencyOne,
  currencyTwo,
  setCurrencyTwo,
  ratesData,
  symbolsData,
  convertedAmount,
  date,
  time,
  currencyList,
}) => {
  return (
    <>
      <Grid container spacing={5} sx={{ padding: '20px 70px' }}>
        <Grid item xs={6} md={3}>
          <Input label="From" value={amount} onAmountChange={setAmount} />
        </Grid>
        <Grid item xs={6} md={9}>
          <Option
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Input label="To" value={convertedAmount} disabled />
        </Grid>
        <Grid item xs={6} md={9}>
          <Option
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </Grid>
      </Grid>
      <Rate
        currencyOne={currencyOne}
        currencyTwo={currencyTwo}
        ratesData={ratesData.data}
        date={date}
        time={time}
      />
    </>
  )
}

export default CurrencyConverter
