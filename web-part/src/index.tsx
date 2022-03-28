import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloProvider from './providers/ApolloClient';
import StyledThemeProvider from './providers/StyledThemeProvider';
import './index.css';

ReactDOM.render(
  <StyledThemeProvider>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </StyledThemeProvider>,
  document.getElementById('root')
);

export default App;
