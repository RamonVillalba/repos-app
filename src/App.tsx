import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

// Gloalb styles
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
