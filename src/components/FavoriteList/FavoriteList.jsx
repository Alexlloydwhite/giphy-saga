import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteList() {

    const gifList = useSelector(store => store.gifList);
    const dispatch = useDispatch();
    console.log(gifList);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITE' })
    }, [])

    return (
        <div>
            {JSON.stringify(gifList)}
            {gifList.map(img => 
                <FavoriteItem key={img.id} img={img} /> 
            )}
        </div>
    )
}

export default FavoriteList;