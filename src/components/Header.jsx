import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const onlineStatus = useInternetStatus();

  return (
    <div className="header bg-gray-700 mb-4 flex justify-between p-4">
      <Link to="/">
        <img className="logo w-16" src={LOGO_URL} />
      </Link>
      <div className="nav-items content-center">
        <ul className="flex justify-between ">
          <li className="nav-item px-4">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="nav-item px-4 text-blue-300 hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item px-4 text-blue-300 hover:text-blue-500">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item px-4 text-blue-300 hover:text-blue-500">
            <Link to="/">Offers</Link>
          </li>
          <li className="nav-item px-4 text-blue-300 hover:text-blue-500">
            <Link to="/">Cart</Link>
          </li>
          <li className="nav-item px-4 text-blue-300 hover:text-blue-500">
            <Link to="/">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
