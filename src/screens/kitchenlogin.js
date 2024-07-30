// LoginScreen.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useStyles } from '../styles'; // Import your styles or define styles directly

const LoginScreen = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory for navigation
  const styles = useStyles(); // Use your styles or define them directly

  // Hardcoded credentials
  const credentials = {
    id: 'admin',
    pass: 'admin@123',
  };

  // Function to handle login
  const handleLogin = () => {
    if (userId === credentials.id && password === credentials.pass) {
      history.push('/kitchen-orders'); // Redirect to /admin on successful login
    } else {
      alert('Invalid credentials'); // Simple error handling
    }
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h4" component="h1" className={styles.title}>
        Login
      </Typography>
      <Box className={styles.form}>
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
  },
};

export default LoginScreen;
