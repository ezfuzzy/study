import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>home page</h1>
      <div className="m-5"></div>
      <Link
        to="/post/course"
        className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        course
      </Link>
      <Link
        to="/something"
        className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        something
      </Link>
    </>
  );
}

export default Home;
