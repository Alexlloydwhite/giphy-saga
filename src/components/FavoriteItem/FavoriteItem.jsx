import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './FavoriteItem.css';

function FavoriteItem(img) {


    const dispatch = useDispatch();

    const category = useSelector(store => store.category);

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY' })
    }, [])
    console.log(img.url);

    console.log(category);

    return (
        <div className='card'>
            <div className="cardContents">
                <img src={img.img.url} />
                <br />
                <select>
                    {category.map(cat => {
                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                    })}
                </select>
            </div>
        </div>
    )

}

export default FavoriteItem;
