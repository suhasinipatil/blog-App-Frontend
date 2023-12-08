const Header = () => {

    return (
        <header className="titleAuthor">
            <h1 className="articleTitle">Blog App</h1>
            <button className="articleAuthor">
                <a href="/create">create</a>
            </button>
            <button className="articleAuthor">
                <a href="/login">Login</a>
            </button>
        </header>
    );
}

export default Header;