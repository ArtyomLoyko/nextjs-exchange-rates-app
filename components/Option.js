import { Select, MenuItem } from '@mui/material'

const ConverterOption = ({
  symbol,
  currencyList,
  onCurrencyChange,
  currency,
}) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      defaultValue={currency}
      onChange={(e) => onCurrencyChange(e.target.value)}
      style={{ width: '100%' }}
    >
      {currencyList.map((currency) => (
        <MenuItem key={currency} value={currency}>
          {currency} - {symbol[currency].name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default ConverterOption
