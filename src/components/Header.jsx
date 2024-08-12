import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const onlineStatus = useInternetStatus();

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={LOGO_URL} />
      </Link>
      <div className="nav-items">
        <ul>
          <li className="nav-item">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Offers</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
