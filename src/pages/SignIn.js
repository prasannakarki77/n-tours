import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="min-h-screen bg-hero-image bg-cover py-20 dark:text-white">
      <div className="bg-white max-w-lg  mx-auto rounded-2xl p-4 bg-opacity-70 dark:bg-black dark:bg-opacity-50">
        <h1 className=" text-3xl  text-primary font-bold text-center mt-5">
          Sign In
        </h1>
        <div className="relative max-w-sm mx-auto my-10">
          <input
            className=" rounded-full py-3 text-black px-10 text-lg  font-semibold text-center border-grey border-2  outline-none placeholder:text-gray focus:border-primary transition-all w-full"
            placeholder="Username"
          />
          <AiOutlineUser
            size={25}
            className="absolute left-4 top-4 text-gray-600"
          />
        </div>
        <div className="relative max-w-sm mx-auto my-10">
          <input
            className=" rounded-full py-3  text-black px-10 text-lg  font-semibold text-center border-grey border-2  outline-none placeholder:text-gray focus:border-primary transition-all w-full"
            placeholder="Password"
            type="password"
          />
          <HiOutlineKey
            size={25}
            className="absolute left-4 top-4 text-gray-600 "
          />
        </div>
        <div className=" max-w-sm flex justify-between items-center mx-auto">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 mr-2" /> Remember me
          </div>
          <p>Forgot password?</p>
        </div>
        <button className=" my-10 max-w-sm text-white bg-primary block w-full mx-auto rounded-lg p-2 text-lg font-bold hover:bg-secondary hover:translate-y-[-2px] hover:shadow-lg transition-all">
          Sign In
        </button>
        <p className="text-center text-lg my-5 ">Or</p>
        <div className="max-w-sm mx-auto flex my-5 justify-between items-center text-black">
          <button className="flex items-center text-md bg-[#F3F3F3] py-3 px-6 rounded-lg cursor-pointer hover:translate-y-[-2px] hover:shadow-lg transition-all">
            <FcGoogle className="mr-2" size={25} /> Google
          </button>
          <button className="flex items-center text-md bg-[#F3F3F3] py-3 px-6 rounded-lg cursor-pointer hover:translate-y-[-2px] hover:shadow-lg transition-all">
            <FaFacebookSquare
              className="mr-2 bg-white text-blue-800"
              size={25}
            />{" "}
            Facebook
          </button>
        </div>
        <p className="my-10 text-center">
          Not Signed in yet?{" "}
          <Link
            to="/signup"
            className=" text-primary font-bold transition-all hover:underline "
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
