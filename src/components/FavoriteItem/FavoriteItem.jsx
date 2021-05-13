import { useEffect } from "react";
import {useDispatch} from 'react-redux';

function FavoriteItem(img) {


    const dispatch = useDispatch();
    //
    useEffect(() => {
      dispatch({type: 'FETCH_CATEGORY'})
    })

    

    return(
        <>
            <div className='card'>
                <img src={img.url} />
                <label for="category">Category:</label>
                <select name="category" id="category">
                    <option value={}>{}</option>
                    <option value="cohort">Cohort</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="nsfw">NSFW</option>
                    <option value="meme">MEME</option>
                </select>


            </div>
        </>
    )

}

export default FavoriteItem;