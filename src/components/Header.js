import logo1 from "../images/swiggy.jpg";
import { useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let count = 0;

  const { userLogin } = useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.item)
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-md m-7 sm:bg-black-100">
      <div className="logo">
        <img src={logo1} className="w-14" />
      </div>
      <div className="flex items-center">
        <ul className="flex px-5">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
          <li className="px-4">
            {userLogin}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;