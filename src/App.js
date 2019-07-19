import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store as reduxStore, history } from './redux/store';
import PublicRoutes from './router';
import './App.css';

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <PublicRoutes history={history} />
    </ReduxProvider>
  );
}

export default App;
