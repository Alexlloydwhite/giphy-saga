import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteList (){

    const gifList = useSelector(store => store.gifList);
    const dispatch = useDispatch();
    //
    useEffect(() => {
      dispatch({type: 'FETCH_FAVORITE'})
    })
    return (
        <>
            {gifList.map((img, index) => 
                <FavoriteItem key={index} img src={img.url} /> 
            )}
        </>
    )
}

export default FavoriteList;