import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 shadow-md">
        <div className="font-special text-primary font-bold text-2xl">
          <Link to="/">N-Tours</Link>
        </div>

        <div className="inline-block text-base font-semibold ">
          <Link className="m-4 hover:text-primary transition-all" to="/">
            Home
          </Link>
          <Link className="m-4 hover:text-primary transition-all" to="/">
            Our Tours
          </Link>
          <Link className="m-4 hover:text-primary transition-all" to="/blogs">
            Blogs
          </Link>
          <Link className="m-4 hover:text-primary transition-all" to="/">
            About
          </Link>
          <Link className="m-4 hover:text-primary transition-all" to="/">
            <button className="text-white bg-primary py-2 px-3 rounded-md hover:bg-primary_dark transition-all">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;