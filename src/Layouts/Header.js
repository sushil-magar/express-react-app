import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, MenuIcon, Button} from '@material-ui/core';

const Header = () => {
  return <AppBar position="static">
    <Toolbar>
      <Typography variant="display1" color="inherit">
        React + Material UI
      </Typography>
    </Toolbar>
  </AppBar>
}

export default Header;