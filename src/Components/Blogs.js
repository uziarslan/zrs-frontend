import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import carImage from "../Assets/images/c.png";
import axiosInstance from "../services/axiosInstance";

export default function Blogs() {
  const { setIsLoading } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            BLOG & INSIGHTS
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Stay Informed with ZRS Car Trading Insights
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the latest car trends, tips, and expert advice from the world of automobiles
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length > 0 ? blogs.map(blog => (
            <article key={blog._id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={blog.image?.path || carImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Automotive
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-semibold">{blog.postedBy.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary-dark mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <div
                  className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />

                {/* Read More Link */}
                <Link
                  to={`/blog/${blog._id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors group/link no-underline"
                >
                  Read More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          )) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="bg-gray-100 rounded-full p-8 mb-6">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No Blogs Available</h3>
              <p className="text-sm text-gray-500 text-center max-w-md">
                Check back soon for exciting articles about cars, automotive tips, and industry insights.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
