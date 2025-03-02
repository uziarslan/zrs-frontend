import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import carImage from "../Assets/images/c.png";
import username from "../Assets/icons/username.svg";
import clock from "../Assets/icons/clock.svg";

export default function SingleBlog() {
    const { setIsLoading } = useContext(AuthContext);

    return (
        <section className="singleBlogSection">
            <div className="singleBlogContainer">
                <div className="singleBlogImage">
                    <img src={carImage} alt="Blog Image" />
                </div>
                <div className="blogAuthorInfo">
                    <div className="dateContainer">
                        <p className="blogDateBig">12<span>Feb</span></p>
                    </div>
                    <div className="titleAndMoreInfo">
                        <h3 className="blogTitle">Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                        <div className="authorAndTime">
                            <div className="iconAndAuthor">
                                <img src={username} alt="Author" />
                                <p className="blogAuthor">Tabish Waheed</p>
                            </div>
                            <div className="iconAndAuthor">
                                <img src={clock} alt="Time" />
                                <p className="blogAuthor">2 Min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blogContentLarge">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className="latestArticleContainer">
                <h3 className="latestArticleTitle">Latest Articles</h3>
                <div className="allLatestContainer">
                    <div className="latestArticleBlogs">
                        <img src={carImage} alt="Blog Image" />
                        <div className="latestArticleContent">
                            <h4 className="latestArticleBlogTime">February 03, 2025</h4>
                            <p className="latestArticleBlogDes">Lorem ipsum dolor sit amet, risus consectetur</p>
                        </div>
                    </div>
                    <div className="latestArticleBlogs">
                        <img src={carImage} alt="Blog Image" />
                        <div className="latestArticleContent">
                            <h4 className="latestArticleBlogTime">February 03, 2025</h4>
                            <p className="latestArticleBlogDes">Lorem ipsum dolor sit amet, risus consectetur</p>
                        </div>
                    </div>
                    <div className="latestArticleBlogs">
                        <img src={carImage} alt="Blog Image" />
                        <div className="latestArticleContent">
                            <h4 className="latestArticleBlogTime">February 03, 2025</h4>
                            <p className="latestArticleBlogDes">Lorem ipsum dolor sit amet, risus consectetur</p>
                        </div>
                    </div>
                    <div className="latestArticleBlogs">
                        <img src={carImage} alt="Blog Image" />
                        <div className="latestArticleContent">
                            <h4 className="latestArticleBlogTime">February 03, 2025</h4>
                            <p className="latestArticleBlogDes">Lorem ipsum dolor sit amet, risus consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


