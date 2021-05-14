import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from '../Search/searchform';
import Header from './Header';
import FavoriteList from '../FavoriteList/FavoriteList';

function App() {



  return (
    <div>
      <Router>
        <Header />
        <div className="app">
          <Route exact path="/favoritelist" component={FavoriteList} />
          <Route exact path="/" component={SearchForm} />
        </div>
      </Router>
    </div>
  );
}

export default App;
