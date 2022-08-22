import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { GrArticle } from "react-icons/gr";
import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      title: "12 Trekking tips for Nepal's mountain range",
      image: "blog1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, amet, tortor sit eros, habitasse lectus tincidunt est vulputate. Vel risus euismod viverra in ac. Leo quisque vitae duis ante dignissim et aliquam. Elementum bibendum blandit etiam purus. Praesent viverra ac sagittis elit nulla egestas dui nunc. Auctor elementum nisl in semper quis nulla. Diam sit lectus sagittis pellentesque.",
      date: "Jan 20, 2021",
    },
    {
      title: "Travelling becomes easier with new bus route",
      image: "blog2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, amet, tortor sit eros, habitasse lectus tincidunt est vulputate. Vel risus euismod viverra in ac. Leo quisque vitae duis ante dignissim et aliquam. Elementum bibendum blandit etiam purus. Praesent viverra ac sagittis elit nulla egestas dui nunc. Auctor elementum nisl in semper quis nulla. Diam sit lectus sagittis pellentesque.",
      date: "Jan 20, 2021",
    },
  ];
  return (
    <div className="p-10">
      <h1 className="flex items-center justify-center mb-10 text-xl font-semibold">
        <GrArticle className="mr-2 " />
        Articles and Blogs
      </h1>
      {blogs.map((blog) => (
        <div className="max-w-4xl flex justify-between shadow-lg rounded-2xl my-0 mx-auto overflow-hidden mb-10 dark:bg-tertiary dark:text-white">
          <div
            className={`min-w-[40%] bg-blog1 bg-${blog.image}  bg-cover`}
          ></div>
          <div className=" p-5 ">
            <div className="font-special text-xl mb-2">{blog.title}</div>
            <div className="mb-4">{blog.desc}</div>
            <div className="text-gray-400 font-semibold">{blog.date}</div>
            <Link to="/blog-details">
              {" "}
              <button className="ml-auto flex items-center  text-primary text-lg font-bold justify-end hover:scale-105 transition-all">
                Read more <AiFillRightCircle className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
