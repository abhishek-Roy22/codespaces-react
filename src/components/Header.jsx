const Header = () => {
    return (
        <div className="header">
            <h1 className="left">The Weather</h1>
            <form className="right">
                <input type="text" placeholder="Search city..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Header;