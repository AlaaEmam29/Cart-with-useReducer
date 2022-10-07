import Navbar from '../Navbar/Navbar';
import Empty from '../Empty/Empty';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Cart from '../Cart/Cart';
import Button from '@mui/material/Button';

import React from 'react';
import Total from '../Total/Total';
import { useGlobalContext } from '../../context/context';
function App() {
  const { loading, error, cart, clearCart } = useGlobalContext();
  if (loading) {
    return <h1 className='loading'>Loading...</h1>
  }
  if (error) {
    return <p className='error'>Error ,Too many requests from this IP, please try again after 15 minutes</p>
  }
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <Container
        maxWidth="md"
        fixed>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }} >
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
            variant="h3" component="div">
            YOUR BAG
          </Typography>
          {
            cart.length === 0 ? <Empty /> : <React.Fragment >
              <Cart />
              <Box sx={{
                bgcolor: '#000',
                width: '100%',
                height: '2px',
              }} />
              <Total />
              <Button
                sx={{
                  height: '50px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.1rem',
                  px: 4,
                  py: 2,
                  my: 2,
                }}
                variant="outlined" color="error"
                onClick={clearCart}>
                CLEAR CART
              </Button>
            </React.Fragment>
          }
        </Box>
      </Container>

    </React.Fragment>
  );
}

export default App;
