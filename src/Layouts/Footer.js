import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';

const Footer = () => {
  return <Paper>
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="About Me" />
      <Tab label="Connect with me" />
      <Tab label="Social Media" />
    </Tabs>
  </Paper>
}

export default Footer;