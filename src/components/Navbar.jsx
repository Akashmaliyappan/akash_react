import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-700 px-10 py-5 rounded-xl z-80 mt-4'>
        <div>
            <img src="./src/assets/react.svg" alt="logo" />
        </div>
        <div>
            <ul className='text-white flex gap-x-24 mr-20'>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "text-yellow-500" : ""}
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Customer" 
                        className={({ isActive }) => isActive ? "text-yellow-500" : ""}
                    >
                        Customer
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/service" 
                        className={({ isActive }) => isActive ? "text-yellow-500" : ""}
                    >
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "text-yellow-500" : ""}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
