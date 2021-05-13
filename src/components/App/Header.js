import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const history = useHistory();

    const searchGifsClick = () => {
        setToggle(false);
        history.push('/');
    }

    const favoritesClick = () => {
        setToggle(true);
        history.push('/favoriteList');
    }
    return (
        <nav className="navBar">
            <h1>Giphy Search!</h1>
            <div className="links">
                {toggle ? <h5 onClick={searchGifsClick}>Search Gifs</h5> : <h5 onClick={favoritesClick}>Favorites</h5>}
            </div>
        </nav>
    );
}

export default Header;


// () => history.push('/')
// () => history.push('/favoriteList')