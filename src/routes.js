import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Auth } from './Components/Auth/Auth';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Wizard1 } from './Components/Wizard/Wizard1/Wizard1';
import { Wizard2 } from './Components/Wizard/Wizard2/Wizard2';
import { Wizard3 } from './Components/Wizard/Wizard3/Wizard3';
import { Wizard4 } from './Components/Wizard/Wizard4/Wizard4';
import { Wizard5 } from './Components/Wizard/Wizard5/Wizard5';

export default (
  <Switch>
    <Route exact path="/" component={ Auth }/>
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/1" component={ Wizard1 } />
    <Route path="/2" component={ Wizard2 } />
    <Route path="/3" component={ Wizard3 } />
    <Route path="/4" component={ Wizard4 } />
    <Route path="/5" component={ Wizard5 } />
  </Switch>
)