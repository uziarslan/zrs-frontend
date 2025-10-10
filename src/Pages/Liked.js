import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import Cars from "../Components/Cars";
import { AuthContext } from "../Context/AuthContext";

export default function Liked() {
    const { favoriteCars, setIsLoading } = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    return (
        <>
            <Navbar />
            <SecondaryHero
                bg={secondaryHero2}
                page="Favorites"
                mainHeading={
                    <>
                        Your Favorite <span>Vehicles</span>
                    </>
                }
            />
            <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-5">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block bg-red-50 text-red-600 px-4 py-1.5 rounded-full font-semibold text-xs mb-4 flex items-center justify-center gap-2 w-fit mx-auto">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            SAVED FAVORITES
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                            Your Liked Cars
                        </h2>
                        <p className="text-base text-gray-600 max-w-2xl mx-auto">
                            {favoriteCars.length > 0
                                ? `You have ${favoriteCars.length} ${favoriteCars.length === 1 ? 'car' : 'cars'} saved in your favorites`
                                : 'Start exploring our collection and save your favorite vehicles here'
                            }
                        </p>
                    </div>

                    {/* Cars Grid */}
                    {favoriteCars.length > 0 ? (
                        <Cars cars={favoriteCars} />
                    ) : (
                        // Empty State
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="bg-gray-100 rounded-full p-8 mb-6">
                                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-3">No Favorites Yet</h3>
                            <p className="text-base text-gray-500 max-w-md text-center mb-8">
                                Browse our collection and click the heart icon on any car to save it to your favorites.
                            </p>
                            <a
                                href="/buy"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg no-underline"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Browse Cars
                            </a>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
