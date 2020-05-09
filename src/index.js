import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { lightTheme } from './theme/theme';
import App from './App';

console.log(lightTheme);

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
