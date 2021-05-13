import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/favoritelist');
    }

    return (
        <div>
            <h1>Giphy Search!</h1>
            <h5 onClick={handleClick}>Favorites</h5>
        </div>
    );
}

export default Header;