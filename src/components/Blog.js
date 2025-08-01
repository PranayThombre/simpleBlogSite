import React, { useContext } from "react";
import Spinner from "./Spinner";
import BlogCard from "./BlogCard";
import { AppContext } from "../context/AppContext";
import "./Blog.css";

const Blog = () => {
  const { posts = [], loading } = useContext(AppContext);

  return (
    <div className="blog-container">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <p className="no-data">No Data Found</p>
      ) : (
        posts.map((post) => <BlogCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blog;
