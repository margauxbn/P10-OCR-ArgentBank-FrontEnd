import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <>
            <nav>
                <Link to="/">
                    <img src="../src/assets/img/argentBankLogo.png" alt="Logo de Argent Bank" className="logo-navbar"/>          
                </Link>
                
                <Link to="/connexion">
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