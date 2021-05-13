const FavoriteItem = ({ img }) => {
    return (
        <div>
            {JSON.stringify(img.data)}
        </div>
    );
}

export default FavoriteItem;