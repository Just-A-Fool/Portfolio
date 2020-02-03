import React from 'react';
import Canvas from './Components/Canvas/Canvas';
import { Route, Switch } from 'react-router-dom';
import ProjectScreen from './Components/Projects/ProjectScreen'
import About from './Components/About/About';
import NotFound from './Components/404/404';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Switch>
          <Route
            exact
            path={'/'}
            component={Canvas}
          />
          <Route
            exact
            path={'/about'}
            component={About}
          />
          <Route
            exact
            path={'/projects'}
            component={ProjectScreen}
          />
          <Route
            exact
            path={'/contact'}
            component={Contact}
          />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>

    </div>
  );
}

export default App;
