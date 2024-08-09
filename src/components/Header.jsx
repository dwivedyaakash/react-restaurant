import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">Offers</li>
          <li className="nav-item">Cart</li>
          <li className="nav-item">Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
