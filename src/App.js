import logo from './logo.svg';
import './App.css';

import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const loading = (
  <div class="full-screen" style={{ display: 'flex' }}>
    <div class="loader"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
