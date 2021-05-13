import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const searchGiphy = () => {
        if (search !== '') {
            axios.get('/api/search', {
                params: {
                    search: search
                }
            })
                .then(response => {
                    dispatch({ type: 'SET_SEARCH', payload: response.data.data.images.original.url })
                })
                .then(setSearch(''))
                .catch(err => {
                    console.log(`error searching for ${search}:`, err);
                })
        }
    }
    return (
        <div>
            <h4>Search For a Giphy</h4>
            <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
            <button onClick={searchGiphy}>Search</button>
        </div>
    );
}

export default SearchForm;