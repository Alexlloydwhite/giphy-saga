import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();
    // state to hold search 
    const [search, setSearch] = useState('');
    // state for cond rend of searched img
    const [toggledSearch, setToggleSearch] = useState(false);
    // state is used for storing name of search
    const [searchResult, setSearchResults] = useState('');
    // used to toggle image fav complete msg, after click event
    const [favorite, setFavorite] = useState(false);

    const searchGiphy = () => {
        // checks to ensure input was provided
        if (search !== '') {
            // sends search to giphy API
            axios.get('/api/search', {
                params: {
                    search: search
                }
            })
                .then(response => {
                    dispatch({ type: 'SET_SEARCH', payload: response.data.data.images.original.url });
                    setToggleSearch(true);
                    setFavorite(false);
                    setSearchResults(search);
                })
                .then(setSearch(''))
                .catch(err => {
                    console.log(`error searching for ${search}:`, err);
                })
        }
    }

    const addFavorite = () => {
        let favGiphy = searchResults;
        console.log(favGiphy);
        dispatch({ type: 'ADD_NEW_FAVORITE', payload: favGiphy })
        setFavorite(true);
    }

    const searchResults = useSelector(store => store.search)
    const favList = useSelector(store => store.gifList)
    return (
        <div className="searchApp">
            <div className="search">
                <h4>Search For a Giphy</h4>
                <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
                <button onClick={searchGiphy}>Search</button>
            </div>
            <div className= "image">
                {toggledSearch ? <h2>Showing Search Results For: {searchResult}</h2> : <></>}
                {toggledSearch ? 
                <div>
                    <img src={searchResults}></img><br />
                    {favorite ? <h5>Image Added To Favorites!</h5> : <button onClick={addFavorite}>favorite</button>}
                </div> 
                :
                <h5>Search for an image!</h5>}
            </div>
        </div>
    );
}

export default SearchForm;