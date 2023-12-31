import { Typography, Box } from '@mui/material'

const Header = () => {
  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" textAlign={'center'}>
        Currency Converter & Exchange Rates App
      </Typography>
    </Box>
  )
}

export default Header
