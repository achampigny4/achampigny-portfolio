import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MyNav from '../src/components/navbar/nav';
import About from '../src/components/about/about';
import Portfolio from './components/portfolio/portfolio';
import MyFooter from '../src/components/footer/footer';

function App() {
  return (
    <Router>
      <div>
        <MyNav />
        <Route exact path="/" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
