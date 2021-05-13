import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [toggledSearch, setToggleSearch] = useState(false);

    const searchGiphy = () => {
        if (search !== '') {
            axios.get('/api/search', {
                params: {
                    search: search
                }
            })
                .then(response => {
                    dispatch({ type: 'SET_SEARCH', payload: response.data.data.images.original.url });
                    setToggleSearch(true);
                })
                .then(setSearch(''))
                .catch(err => {
                    console.log(`error searching for ${search}:`, err);
                })
        }
    }

    const searchResults = useSelector(store => store.search)
    return (
        <div>
            <div>
                <h4>Search For a Giphy</h4>
                <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
                <button onClick={searchGiphy}>Search</button>
            </div>
            <div>
            
                {toggledSearch ? <img src={searchResults}></img> : <h5>Search for an image!</h5> }
            </div>
        </div>
    );
}

export default SearchForm;