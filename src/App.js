import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MyNav from '../src/components/navbar/nav';
import About from '../src/components/about/about';
import Portfolio from './components/portfolio/portfolio';
import MyFooter from '../src/components/footer/footer';

function App() {
  return (
    <Router basename="/achampigny-portfolio">
      <div>
        <MyNav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
        </Switch>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
