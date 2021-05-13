import React from 'react';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

function App(props) {
  //create variable for accessing dispatch function 
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch({type: 'FETCH_GIF'})
  })


  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
