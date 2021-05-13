import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

function Favorites (){

    const dispatch = useDispatch();
    //
    useEffect(() => {
      dispatch({type: 'FETCH_FAVORITES'})
    })
    return (
        
    )
}

export default Favorites;