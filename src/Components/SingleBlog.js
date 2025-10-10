import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import carImage from "../Assets/images/c.png";
import axiosInstance from "../services/axiosInstance";

export default function SingleBlog() {
  const { setIsLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const topRef = useRef(null);

  const formatDateBig = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return { day, month, year };
  };

  const formatLatestDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
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

        const latestResponse = await axiosInstance.get('/api/v1/blogs/latest?limit=5');
        setLatestBlogs(latestResponse.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogData();
  }, [id, setIsLoading]);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!blog) return null;

  const { day, month, year } = formatDateBig(blog.createdAt);

  return (
    <section ref={topRef} className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <Link to="/blogs" className="text-gray-500 hover:text-primary transition-colors">Blogs</Link>
          <span className="text-gray-300">/</span>
          <span className="text-primary font-medium">Article</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            {/* Blog Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Automotive Guide
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{month} {day}, {year}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{blog.postedBy.name}</span>
              </div>
            </div>

            {/* Blog Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-dark mb-8 leading-tight">
              {blog.title}
            </h1>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 shadow-xl">
              <img
                src={blog.image.path}
                alt={blog.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <div
                className="prose prose-base md:prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: blog.description }}
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: '#374151'
                }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-10 bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl p-6 border-2 border-dashed border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-primary-dark mb-1">Enjoyed this article?</h3>
                  <p className="text-sm text-gray-600">Share it with your friends and family</p>
                </div>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-[#1a8cd8] transition-all hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-[#004182] transition-all hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Author Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-2xl font-bold">
                    {blog.postedBy.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Written by</p>
                    <h4 className="text-base font-bold text-primary-dark">{blog.postedBy.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Automotive expert and enthusiast sharing insights about the latest trends in the car industry.
                </p>
              </div>

              {/* Latest Articles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-base font-bold text-primary-dark mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  Latest Articles
                </h3>
                <div className="space-y-4">
                  {latestBlogs.map((latestBlog) => (
                    <Link
                      key={latestBlog._id}
                      to={`/blog/${latestBlog._id}`}
                      onClick={scrollToTop}
                      className="group block no-underline"
                    >
                      <div className="flex gap-3 hover:bg-gray-50 p-2 rounded-xl transition-all duration-300">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={latestBlog.image?.path || carImage}
                            alt={latestBlog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-500 mb-1.5">
                            {formatLatestDate(latestBlog.createdAt)}
                          </p>
                          <h4 className="text-sm font-semibold text-gray-700 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {latestBlog.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Looking for a Car?</h3>
                <p className="text-sm text-white/80 mb-5">
                  Browse our premium collection of vehicles
                </p>
                <Link
                  to="/buy"
                  className="inline-block w-full bg-white text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold hover:text-white transition-all duration-300 hover:scale-105 no-underline"
                >
                  View All Cars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
