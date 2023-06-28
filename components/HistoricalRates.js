import { useMemo } from 'react'
import {
  Typography,
  CircularProgress,
  Tabs,
  Tab,
  Box,
  Container,
} from '@mui/material'
import { Chart } from 'react-charts'
import { useHistory } from './../../hooks/useHistory'

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // id={`full-width-tabpanel-${index}`}
      // aria-labelledby={`full-width-tab-${index}`}
      style={{
        width: '100%',
        // height: "90%",
        height: '223px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

const HistoricalRates = ({ currencyOne, currencyTwo }) => {
  const { period, setPeriod, isLoading, isError, chartsData } = useHistory(
    currencyOne,
    currencyTwo,
  )

  const primaryAxis = useMemo(() => ({ getValue: (datum) => datum.date }), [])

  const secondaryAxes = useMemo(() => [{ getValue: (datum) => datum.rate }], [])

  if (isError)
    return (
      <Typography fontSize={15} fontWeight="bold">
        Something has gone wrong
      </Typography>
    )

  if (isLoading) return <CircularProgress />

  const handleChange = (event, newValue) => {
    setPeriod(newValue)
  }

  const ChartComponent = () => (
    <Chart
      options={{
        data: chartsData,
        primaryAxis,
        secondaryAxes,
      }}
    />
  )

  return (
    <Container
      sx={{
        /* width: '100%', height: '100%' */ /* maxWidth: "792px",
    maxHeight: "300px", */
        // width: "910px",
        width: '100%',
        height: '100%',
      }}
    >
      {/* <> */}
      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          sx={{ width: '100%' }}
          value={period}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Last month" value={1} sx={{ fontSize: 11 }} />
          <Tab label="Last 3 months" value={3} sx={{ fontSize: 11 }} />
          <Tab label="Last 6 months" value={6} sx={{ fontSize: 11 }} />
          <Tab label="Last 12 months" value={12} sx={{ fontSize: 11 }} />
        </Tabs>
      </Box>
      <TabPanel value={period} index={1}>
        <ChartComponent />
      </TabPanel>
      <TabPanel value={period} index={3}>
        <ChartComponent />
      </TabPanel>
      <TabPanel value={period} index={6}>
        <ChartComponent />
      </TabPanel>
      <TabPanel value={period} index={12}>
        <ChartComponent />
      </TabPanel>
      {/* </> */}
    </Container>
  )
}

export default HistoricalRates
