import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { logout } from "../../redux/reducer";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const token = useSelector((state: RootState) => state.user.token);
  const userName = useSelector((state: RootState) => state.user.userName);

  useEffect(() => {
    if (token) {
      profile();
    }
  }, [profile, token]);

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav>
        <Link to="/">
          <img src="../src/assets/img/argentBankLogo.png" alt="Argent Bank's logo" className="logo-navbar" />
        </Link>
        {token && token.length > 0 ? (
          <div className="block-navbar-signout">
            <div className="user-navbar">
              <i className="fa-solid fa-circle-user"></i>
              <p className="username-navbar">{userName}</p>
            </div>
            <button className="btn-sign-in-out" onClick={handleSignOut}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <p className="text-sign-in-out">Sign out</p>
            </button>
          </div>
        ) : (
          <Link to="/connection">
            <button className="btn-sign-in-out">
              <i className="fa-solid fa-circle-user"></i>
              <p className="text-sign-in-out">Sign in</p>
            </button>
          </Link>
        )}
      </nav>
    </>
  );
}

export default NavBar;
