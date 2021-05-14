import { useEffect } from "react";
import {useDispatch} from 'react-redux';

function FavoriteItem(img) {


    const dispatch = useDispatch();

    // const category = useSelector(store => store.category);

    useEffect(() => {
      dispatch({type: 'FETCH_CATEGORY'})
    })

    return(
            <div className='card'>
                {/* {JSON.stringify(img)} */}
                {/* <img src={img.url} />
                <label for="category">Category:</label>
                <select {...category.map((item) => 
                    <option value={item.id}>{item.name}</option>
                )}>
                </select> */}


            </div>
    )

}

export default FavoriteItem;