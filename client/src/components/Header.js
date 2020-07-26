import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const APP_NAME = process.env.APP_NAME || 'Wallstreet91';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{APP_NAME}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
