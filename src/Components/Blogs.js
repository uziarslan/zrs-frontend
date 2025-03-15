import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import carImage from "../Assets/images/c.png";
import blogArrow from "../Assets/icons/blog-arrow.svg";
import axiosInstance from "../services/axiosInstance";

export default function Blogs() {
  const { setIsLoading } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  // Date formatting function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).replace(/(\d+)/g, '$1'); // Removes any commas
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get("/api/v1/blogs");
        setBlogs(res.data.blogs);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, [setIsLoading])

  return (
    <section className="blogsSection max-width">
      <div className="blogsHeaderContainer">
        <h2 className="blogsHeading">Stay Informed with ZRS Car Trading Insights</h2>
        <p className="blosSubHeading">Explore the latest car trends, tips, and expert advice from the world of automobiles.</p>
      </div>
      <div className="blogContainer">
        {blogs.length && blogs.map(blog => (
          <div className="blogCard" key={blog.id}>
            <div className="blogCardImage">
              <img src={carImage} alt="Car" />
            </div>
            <div className="blogAuthorContainer">
              <p className="blogAuthor">{blog.postedBy.name}</p>
              <p className="blogDate">{formatDate(blog.createdAt)}</p>
            </div>
            <div className="blogContentContainer">
              <h3 className="blogTitle">
                {blog.title}
              </h3>
              <div
                className="blogContent"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.description
                }}
              />
              <Link to={`/blog/${blog._id}`} className="blogReadMoreLink">
                <button className="blogReadMore">
                  Read More
                  <img src={blogArrow} alt="Read more button" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
