import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logOut = () => {
    navigate("/login");
    setToken("");
    toast.success("User logged out successfully");
    localStorage.removeItem("token");
    setCartItems({});
  };

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-36' />
      </Link>
      <ul className='sm:flex gap-5 text-sm text-gray-700 hidden'>
        <NavLink className='flex  flex-col items-center gap-1' to='/'>
          <p className='text-black'>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/collection'>
          <p className='text-black'>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/about'>
          <p className='text-black'>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/contact'>
          <p className='text-black'>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt='' />
        <div className='group relative'>
          <img onClick={() => (token ? null : navigate("/login"))} src={assets.profile_icon} className='w-5 cursor-pointer' alt='' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            {/* Dropdown Menu shows only after login */}
            {token && (
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate("/orders")} className='cursor-pointer hover:text-black'>
                  Orders
                </p>
                <p onClick={logOut} className='cursor-pointer hover:text-black'>
                  LogOut
                </p>
              </div>
            )}
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='' />
      </div>

      {/*SideBar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex cursor-pointer items-center gap-4 p-3'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/'>
            <p className='text-black'>HOME</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/collection'>
            <p className='text-black'>COLLECTION</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/about'>
            <p className='text-black'>ABOUT</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/contact'>
            <p className='text-black'>CONTACT</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
