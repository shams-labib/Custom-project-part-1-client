import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Firebase/AuthContext";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-products"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        All Products
      </NavLink>

      <NavLink
        to="/bids"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        Bids
      </NavLink>

      <NavLink
        to="/create-product"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        Create a product
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm py-1">
      <div className="navbar md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow w-[100px]"
            >
              {links}
            </ul>
          </div>
          <a className="lg:text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Bangla Mart
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 text-[14px] font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end ">
          {loading ? (
            <p>Loading</p>
          ) : user ? (
            <Link
              to={"/login"}
              className="btn bg-gradient-to-r from-red-400 to-gray-400 text-white 
              hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 
              transition-all duration-500 ease-in-out shadow-md hover:shadow-lg border-0"
            >
              Sign Out
            </Link>
          ) : (
            <div className="flex gap-3">
              <Link
                to={"/login"}
                className="btn bg-gradient-to-r from-red-400 to-gray-400 text-white 
              hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 
              transition-all duration-500 ease-in-out shadow-md hover:shadow-lg border-0"
              >
                Login
              </Link>
              <Link to={"/register"} className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
