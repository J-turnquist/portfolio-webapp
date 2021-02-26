import './App.css';
import React from 'react';

// Theme
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
