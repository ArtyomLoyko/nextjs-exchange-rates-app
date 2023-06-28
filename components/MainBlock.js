import { useCurrency } from '../hooks/useCurrency'
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import CurrencyConverter from './CurrencyConverter'
import TodayRates from './TodayRates'

const Converter = () => {
  const {
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
  } = useCurrency()

  if (isError)
    return (
      <Typography fontSize={18} fontWeight="bold">
        Something has gone wrong
      </Typography>
    )

  if (isLoading) return <CircularProgress />

  return (    
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%' , backgroundColor: '#f6f6f6' }} >
              <CardContent>
                <CurrencyConverter
                  {...{
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
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <TodayRates currencyOne={currencyOne} ratesData={ratesData.data} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Converter
