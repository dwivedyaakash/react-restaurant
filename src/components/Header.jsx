import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Offers
        </a>
        <a className="nav-item" href="#">
          Cart
        </a>
        <a className="nav-item" href="#">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Header;
