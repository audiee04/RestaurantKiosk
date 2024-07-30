// import React, { useState, useEffect, useContext } from 'react';
// import QRCode from 'qrcode.react';
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
// import { Store } from '../Store'; // Import your context or store

// const PaymentScreen = () => {
//   const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
//   const [qrValue, setQrValue] = useState(''); // State to hold the QR code value
//   const history = useHistory(); // Initialize useHistory for navigation

//   // Get totalPrice from context (if using context)
//   const { state } = useContext(Store);
//   const { totalPrice: contextTotalPrice } = state.order; // Access totalPrice from context

//   useEffect(() => {
//     // Set the totalPrice from context
//     setTotalPrice(contextTotalPrice);
//   }, [contextTotalPrice]);

//   useEffect(() => {
//     // Generate QR code value based on the totalPrice
//     const paymentUrl = `https://yourpaymentgateway.com/pay?amount=${totalPrice}`;
//     setQrValue(paymentUrl);
//   }, [totalPrice]);

//   // Function to handle redirection to CompleteOrderScreen
//   const handleOrderCompleted = () => {
//     history.push('/CompleteOrderScreen'); // Redirect to CompleteOrderScreen.js
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Payment Screen</h1>
//       <div style={styles.form}>
//         <label>
//           Amount: ₹{totalPrice}
//         </label>
//       </div>
//       {qrValue && (
//         <div style={styles.qrCode}>
//           <QRCode value={qrValue} size={256} />
//           <p>Scan this QR code to pay ₹{totalPrice}</p>
//         </div>
//       )}
//       <div style={styles.buttonContainer}>
//         <a href='/complete'><button onClick={handleOrderCompleted} style={styles.button}>
//           Order Completed
//         </button></a>
//       </div>
//     </div>
//   );
// };

// // Styles for the component
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   form: {
//     marginBottom: '20px',
//   },
//   qrCode: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     marginTop: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     color: '#fff',
//     backgroundColor: '#007bff', // Bootstrap primary color
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default PaymentScreen;




// import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
// import React from 'react';
// import Logo from '../components/Logo';
// import { useStyles } from '../styles';

// export default function PaymentScreen(props) {
//   const styles = useStyles();
//   return (
//     <Box className={[styles.root, styles.navy]}>
//       <Box className={[styles.main, styles.center]}>
//         <Box>
//           <Logo large></Logo>
//           <Typography
//             gutterBottom
//             className={styles.title}
//             variant="h3"
//             component="h3"
//           >
//             Please follow the instruction on the PIN pad
//           </Typography>
//           <CircularProgress />
//         </Box>
//       </Box>
//       <Box className={[styles.center, styles.space]}>
//         <Button
//           onClick={() => props.history.push('/complete')}
//           variant="contained"
//           color="primary"
//           className={styles.largeButton}
//         >
//           Complete Order
//         </Button>
//       </Box>
//     </Box>
//   );
// }


import React, { useState, useEffect, useContext } from 'react';
import QRCode from 'qrcode.react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { Store } from '../Store'; // Import your context or store
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import Logo from '../components/Logo'; // Import the Logo component
import { useStyles } from '../styles'; // Import your styles

const PaymentScreen = () => {
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
  const [qrValue, setQrValue] = useState(''); // State to hold the QR code value
  const history = useHistory(); // Initialize useHistory for navigation
  const styles = useStyles(); // Use your styles

  // Get totalPrice from context (if using context)
  const { state } = useContext(Store);
  const { totalPrice: contextTotalPrice } = state.order; // Access totalPrice from context

  useEffect(() => {
    // Set the totalPrice from context
    setTotalPrice(contextTotalPrice);
  }, [contextTotalPrice]);

  useEffect(() => {
    // Generate QR code value based on the totalPrice
    const paymentUrl = `upi://pay?pa=mohith123uppi@ybl&pn=Mohith&mc=0000&mode=02&purpose=00`;
    setQrValue(paymentUrl);
  }, [totalPrice]);

  // Function to handle redirection to CompleteOrderScreen
  const handleOrderCompleted = () => {
    history.push('/Complete'); // Redirect to CompleteOrderScreen.js
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

// Styles for the component
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
    backgroundColor: '#001f3f', // Example navy color
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
