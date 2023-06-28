import { useState } from 'react'
import { useCurrency } from '../hooks/useCurrency'
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  AppBar,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import CurrencyConverter from './CurrencyConverter'
// import HistoricalRates from './HistoricalRates';
import TodayRates from './TodayRates'

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

const Converter = () => {
  const [tab, setTab] = useState(0)

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

  const handleChange = (_, newValue) => {
    setTab(newValue)
  }

  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%' }}>
              <AppBar position="static" sx={{ boxShadow: 'none' }}>
                <Tabs
                  value={tab}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                >
                  <Tab label="Currency converter" />
                  <Tab label="Historical rates" />
                </Tabs>
              </AppBar>
              <CardContent>
                <TabPanel value={tab} index={0}>
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
                </TabPanel>
                <TabPanel value={tab} index={1}>
                  {/* <HistoricalRates {...{currencyOne, currencyTwo}} /> */}
                </TabPanel>
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
