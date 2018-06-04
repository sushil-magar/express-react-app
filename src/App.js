import React, { Component, Fragment} from 'react';
import {Header, Footer, Body} from './Layouts/index';

class App extends React.Component {
  render() {
    return <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  }
}

export default App;