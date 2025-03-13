import React, { useEffect, useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import { AuthContext } from "../Context/AuthContext";
import Blogs from "../Components/Blogs";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/axiosInstance"; // Adjust the import path
import Flash from "../Components/Flash";

export default function Unsubscribe() {
    const { setIsLoading } = useContext(AuthContext);
    const [message, setMessage] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const unsubscribe = async () => {
            try {
                setIsLoading(true);
                const { data } = await axiosInstance.get(`/api/v1/unsubscribe/${id}`);
                setMessage(data)
            } catch (error) {
                console.error("Error unsubscribing:", error);
                setMessage({ error: error })
            } finally {
                setIsLoading(false);
            }
        };

        unsubscribe();
    }, [id, setIsLoading]);

    return (
        <>
            <Flash message={message} />
            <Navbar page="blog" />
            <SecondaryHero
                bg={secondaryHero2}
                page="Blogs"
                mainHeading={
                    <>
                        Smart Deals, Smooth Rides – Your Ultimate <span>Car Buying Guide!</span>
                    </>
                }
            />
            <Blogs />
            <Footer />
        </>
    );
}