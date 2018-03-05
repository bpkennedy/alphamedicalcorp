import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import { red, grey } from 'material-ui/colors'

import TopNav from './TopNav/topNav.component';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#eceff1',
    },
    secondary: {
      light: '#efefef',
      main: '#bdbdbd',
      dark: '#8d8d8d',
      contrastText: '#eceff1',
    },
  })
});

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          <header className="App-header">
            <TopNav></TopNav>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;