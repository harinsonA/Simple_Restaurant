import { NavLink } from 'react-router-dom'
import logo from '../../Assets/img/Otros/simple-house-logo.png'

const NavBar = () => (

    <div className="header-nav">
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <div className="navbar-brand">
                    <div className="logo-header">
                        <img src={logo} alt="simple-restaurant-logo" />
                    </div>
                    <div className="logo-title">
                        <h1>Simple Restaurant</h1>
                        <p>new restaurant template</p>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse my-2 navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
export default NavBar