import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// public level
import Home from './pages/home/';
// admin level
import Dashboard from './pages/admin/dashboard';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
      {/* Route public*/}
        <Route path="/" exact component={Home} />
      {/* Route Admin*/}
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
};

