import React, { useState, useEffect, useContext } from 'react';
import QRCode from 'qrcode.react';
import { useHistory } from 'react-router-dom'; 
import { Store } from '../Store'; 
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import Logo from '../components/Logo'; 
import { useStyles } from '../styles'; 

const PaymentScreen = () => {
  const [totalPrice, setTotalPrice] = useState(0); 
  const [qrValue, setQrValue] = useState(''); 
  const history = useHistory(); 
  const styles = useStyles(); 

  const { state } = useContext(Store);
  const { totalPrice: contextTotalPrice } = state.order; 

  useEffect(() => {
  
    setTotalPrice(contextTotalPrice);
  }, [contextTotalPrice]);

  useEffect(() => {
    const paymentUrl = `upi://pay?pa=mohith123uppi@ybl&pn=Mohith&mc=0000&mode=02&purpose=00`;
    setQrValue(paymentUrl);
  }, [totalPrice]);

 
  const handleOrderCompleted = () => {
    history.push('/Complete'); 
  };

  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large />
          <Typography gutterBottom className={styles.title} variant="h3" component="h3">
            Please follow the instructions on the PIN pad
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={handleOrderCompleted}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Complete Order
        </Button>
      </Box>
      <Box className={[styles.container]}>
        <Typography variant="h4" component="h4" style={{color: 'white',left:'181px',
    position: 'relative'}}>
          Amount: ₹{totalPrice}
        </Typography>
        {qrValue && (
          <Box className={[styles.qrCode]}>
            <QRCode value={qrValue} size={256} style={{height: '256px',
    width: '256px',
    left: '157px',
    position: 'relative'}} />
          </Box>
        )}
      </Box>
    </Box>
  );
};


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  },
  navy: {
    backgroundColor: '#001f3f', 
  },
  title: {
    marginBottom: '20px',
  },
  largeButton: {
    padding: '10px 20px',
    fontSize: '16px',
  },
  qrCode: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  container: {
    marginTop: '20px',
  },
};

export default PaymentScreen;
