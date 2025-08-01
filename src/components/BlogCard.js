import React from "react";
import "./BlogCard.css";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h2 className="blog-title">{post.title}</h2>
      <p className="blog-meta">
        By <span className="author">{post.author}</span> on{" "}
        <span className="category">{post.category}</span>
      </p>
      <p className="blog-date">📅 {post.date}</p>
      <p className="blog-content">{post.content}</p>
      <div className="tags">
        {Array.isArray(post.tags) &&
          post.tags.map((tag, index) => (
            <span className="tag" key={index}>
              #{tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default BlogCard;
