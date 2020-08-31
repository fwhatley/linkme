import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from "./landing/landing";
import Dashboard from "./dashboard/dashboard";
import Board from "./board/board";

import './app.css';

function App() {
  return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/boards/:boardId" component={Board}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
