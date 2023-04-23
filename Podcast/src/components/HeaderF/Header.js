import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
// import Listened from "../ListenedF/Listened";

import "./Header.css";

const Header = () => {
  const { watchlist, watched } = useContext(GlobalContext);

  // console.log(watchlist ? true : false)
  return (
    <>
      <header>
        <div className="inner-content">
          <div class="brand">
            <Link to="/">Home</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist" activeClassName="active">
                Favourite List{" "}
                {watchlist.length > 0 ? (
                  <i class="fa-solid fa-tv" style={{ color: "gold" }}></i>
                ) : (
                  <i class="fa-solid fa-tv"></i>
                )}
              </Link>
            </li>
            <li>
              <Link to="/listened" activeClassName="active">
                Listened{" "}
                {watched.length > 0 ? (
                  <i
                    class="fa-solid fa-headphones"
                    style={{ color: "red" }}
                  ></i>
                ) : (
                  <i class="fa-solid fa-headphones"></i>
                )}
              </Link>
            </li>
            <li>
            <div class="dropdown">
                <a
                  href="/Home"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img id="avatar" src="/img.jpg" alt="img"></img>
                </a>
              <div class="dropdown-content">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/logout" className="dropdown-item">
                  Logout
                </Link>
              </div>
            </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
