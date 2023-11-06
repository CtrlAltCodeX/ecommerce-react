function Header() {
    return <div>
        <header>
            <div className="bg-black py-2">
                <div className="d-flex text-light justify-content-between container">
                    <p>Welcome to Our Store Hiscraves</p>
                    <p>Call Us: 1234567890</p>
                </div>
            </div>

            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-white shadow p-3 bg-white rounded">
                <div className="w-100 d-flex justify-content-between container">
                    <img src='/images/menus/bars.png' />

                    <div className="d-flex" style={{ gridGap: "15px" }}>
                        <a href="/product-page"><img src='/images/menus/search.png' /></a>
                        <img src='/images/menus/like.png' />
                        <img src='/images/menus/cart.png' />
                        <img src='/images/menus/user.png' />

                    </div>
                </div>
            </nav>
        </header>
    </div>
}

export default Header;