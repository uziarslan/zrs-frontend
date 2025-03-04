import React, { useContext, useEffect, useState, useRef } from "react"; // Added useRef
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import carImage from "../Assets/images/c.png";
import username from "../Assets/icons/username.svg";
import clock from "../Assets/icons/clock.svg";
import axiosInstance from "../services/axiosInstance";

export default function SingleBlog() {
  const { setIsLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const topRef = useRef(null); // Create a ref for the top of the component

  const formatDateBig = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month };
  };

  const formatLatestDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      setIsLoading(true);
      try {
        const blogResponse = await axiosInstance.get(`/api/v1/blogs/${id}`);
        setBlog(blogResponse.data);

        const latestResponse = await axiosInstance.get('/api/v1/blogs/latest?limit=4');
        setLatestBlogs(latestResponse.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogData();
  }, [id, setIsLoading]);

  // Function to scroll to top
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!blog) return null;

  const { day, month } = formatDateBig(blog.createdAt);

  return (
    <section className="singleBlogSection max-width" ref={topRef}> {/* Add ref here */}
      <div className="singleBlogContainer">
        <div className="singleBlogImage">
          <img src={blog.image.path} alt="Blog" />
        </div>
        <div className="blogAuthorInfo">
          <div className="dateContainer">
            <p className="blogDateBig">
              {day}<span>{month}</span>
            </p>
          </div>
          <div className="titleAndMoreInfo">
            <h3 className="blogTitle">{blog.title}</h3>
            <div className="authorAndTime">
              <div className="iconAndAuthor">
                <img src={username} alt="Author" />
                <p className="blogAuthor">{blog.postedBy.name}</p>
              </div>
              <div className="iconAndAuthor">
                <img src={clock} alt="Time" />
                <p className="blogAuthor">{blog.createdAt} Min</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blogContentLarge">
          <div dangerouslySetInnerHTML={{
            __html: blog.description
          }} />
        </div>
      </div>
      <div className="latestArticleContainer">
        <h3 className="latestArticleTitle">Latest Articles</h3>
        <div className="allLatestContainer">
          {latestBlogs.map((latestBlog) => (
            <Link
              to={`/blog/${latestBlog._id}`}
              className="latestArticleLink"
              onClick={scrollToTop} // Add onClick handler
              key={latestBlog._id}
            >
              <div className="latestArticleBlogs">
                <img src={carImage} alt="Blog" />
                <div className="latestArticleContent">
                  <h4 className="latestArticleBlogTime">
                    {formatLatestDate(latestBlog.createdAt)}
                  </h4>
                  <p className="latestArticleBlogDes">{latestBlog.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}