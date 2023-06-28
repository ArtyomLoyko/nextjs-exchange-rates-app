import { Box, Typography } from '@mui/material'

const ConverterDisplay = ({
  amount,
  currencyOne,
  currencyTwo,
  convertedAmount,
  date,
  time,
}) => {
  return (
    <Box textAlign="right">
      <Typography>Your rate:</Typography>
      <Typography fontWeight="bold">
        {amount} {currencyOne} = {convertedAmount} {currencyTwo}
      </Typography>
      <Typography color="gray.500">
        Last updated {date} {time}
      </Typography>
    </Box>
  )
}

export default ConverterDisplay
