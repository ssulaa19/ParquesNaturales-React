import logo from '/img/logo.png';


const Header = () => {
    return (
        <header>

            <div className="container bg-black bg-opacity-75">
                <div className="row justify-content-between align-items-center text-center text-warning p-3">
                    <div className="col-4">
                        <a href="/">
                            <img src={logo} width='110px' alt=""/>
                        </a>
                    </div>
                    <div className="col-4 fs-5 fw-bold ">
                        Parques Naturales de España
                    </div>
                    <div className="col-4 text-end">
                        <button className="btn border border-2 border-warning text-white">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;