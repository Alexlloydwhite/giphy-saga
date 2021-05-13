import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from '../Search/searchform';


function App() {
  //create variable for accessing dispatch function 
  const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_GIF' })
  // })


  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <Route exact path="/" component={SearchForm} />
      </Router>
    </div>
  );
}

export default App;
