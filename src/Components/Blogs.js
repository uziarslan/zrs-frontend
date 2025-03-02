import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import carImage from "../Assets/images/c.png";
import blogArrow from "../Assets/icons/blog-arrow.svg";

export default function Blogs() {
  const { setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <section className="blogsSection max-width">
      <div className="blogsHeaderContainer">
        <h2 className="blogsHeading">Our Recent Articles</h2>
        <p className="blosSubHeading">Stay Informed with Our Latest Insights</p>
      </div>
      <div className="blogContainer">
        <div className="blogCard">
          <div className="blogCardImage">
            <img src={carImage} alt="Car" />
          </div>
          <div className="blogAuthorContainer">
            <p className="blogAuthor">Tabish Waheed</p>
            <p className="blogDate">12 Feb, 2021</p>
          </div>
          <div className="blogContentContainer">
            <h3 className="blogTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h3>
            <p className="blogContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="blogReadMore">
              Read More
              <img src={blogArrow} alt="Read more button" />
            </button>
          </div>
        </div>
        <div className="blogCard">
          <div className="blogCardImage">
            <img src={carImage} alt="Car" />
          </div>
          <div className="blogAuthorContainer">
            <p className="blogAuthor">Tabish Waheed</p>
            <p className="blogDate">12 Feb, 2021</p>
          </div>
          <div className="blogContentContainer">
            <h3 className="blogTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h3>
            <p className="blogContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="blogReadMore">
              Read More
              <img src={blogArrow} alt="Read more button" />
            </button>
          </div>
        </div>
        <div className="blogCard">
          <div className="blogCardImage">
            <img src={carImage} alt="Car" />
          </div>
          <div className="blogAuthorContainer">
            <p className="blogAuthor">Tabish Waheed</p>
            <p className="blogDate">12 Feb, 2021</p>
          </div>
          <div className="blogContentContainer">
            <h3 className="blogTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h3>
            <p className="blogContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="blogReadMore">
              Read More
              <img src={blogArrow} alt="Read more button" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
