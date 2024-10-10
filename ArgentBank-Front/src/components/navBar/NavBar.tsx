import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <>
            <nav>
                <Link to="/">
                    <img src="../src/assets/img/argentBankLogo.png" alt="Argent Bank's logo" className="logo-navbar"/>
                    <h1 className="h1-navbar">Argent Bank</h1>      
                </Link>
                
                <Link to="/connection">
                    <button className="btn-signin">
                        <i className="fa-solid fa-circle-user"></i>
                        <p className="text-signin">Sign in</p>
                    </button>                
                </Link>

            </nav>

        </>
    );
}

export default NavBar