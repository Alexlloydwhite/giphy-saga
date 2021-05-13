import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

function Favorites (){

    const gifList = useSelector(store => store.gifList);
    const dispatch = useDispatch();
    //
    useEffect(() => {
      dispatch({type: 'FETCH_FAVORITES'})
    })
    return (
        {gifList.map((gif, index) => 
            <li key={index}>{gif.}</li>  
          )}
    )
}

export default Favorites;