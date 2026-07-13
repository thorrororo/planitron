import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div>
                <div className="title_container">
                    <h1 className="title">Planitron</h1>
                    <p className="author">by <a href="https://thorrow.ct8.pl">thorrow</a></p>
                </div>
            </div>
        </div>
    )
}

export default Header;