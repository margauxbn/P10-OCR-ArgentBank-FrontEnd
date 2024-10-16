import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <>
            <nav>
                <Link to="/">
                    <img src="../src/assets/img/argentBankLogo.png" alt="Argent Bank's logo" className="logo-navbar"/>
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