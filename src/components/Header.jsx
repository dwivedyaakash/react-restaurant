import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { useContext } from "react";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useInternetStatus();
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className='header bg-gray-700 mb-4 flex justify-between p-4'>
      <Link to='/'>
        <img className='logo w-16' src={LOGO_URL} />
      </Link>
      <div className='nav-items content-center'>
        <ul className='flex justify-between '>
          <li className='nav-item px-4'>
            Status: {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className='nav-item px-4 text-blue-300 hover:text-blue-500'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item px-4 text-blue-300 hover:text-blue-500'>
            <Link to='/about'>{loggedInUser}</Link>
          </li>
          <li className='nav-item px-4 text-blue-300 hover:text-blue-500'>
            <Link to='/cart'>Cart ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
