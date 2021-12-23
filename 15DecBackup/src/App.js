import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="h6"
              color="inherit"
            >
              Dollar General
           </TypoGraphy>
            <Navbar/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default App;