import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from '../Search/searchform';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={SearchForm} />
      </Router>
    </div>
  );
}

export default App;
