import React, { useState } from 'react';
import { CssBaseline, Container, Box, TextField, Button, Divider } from '@material-ui/core';

import StockList from './components/StockList';
import Header from './components/Header';

function App() {
  const [showStocks, setShowStocks] = useState(localStorage.getItem('email') ? true : false);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Box marginTop={5} marginBottom={5}>
          {showStocks ? (
            <>
              <StockList />
              <Divider style={{ marginTop: '2em', marginBottom: '2em' }} />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  delete localStorage.email;
                  window.location.reload();
                }}>
                Reset Email
              </Button>
            </>
          ) : (
            <>
              <TextField id="email" placeholder="Email" fullWidth margin="normal" required />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  localStorage.email = document.getElementById('email').value;
                  setShowStocks(true);
                }}>
                Start
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;
