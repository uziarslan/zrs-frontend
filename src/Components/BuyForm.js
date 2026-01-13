import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Flash from "./Flash";

const BuyForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
    });
    const [message, setMessage] = useState({});

    const { setIsLoading, submitTestDriveForm } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await submitTestDriveForm(formData, "buyNowForm");
            navigate("/buy-now-confirm");
        } catch (err) {
            setMessage({ error: err.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <Flash message={message} />
            <div className="max-w-4xl mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
                        BUY NOW
                    </span>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                        Start Your Purchase Journey
                    </h1>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Fill in your details and our sales team will contact you within 24 hours to finalize your purchase
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
                    {/* Your Information */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Your Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-2">
                                    First Name<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-2">
                                    Last Name<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                                    Email Address<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label htmlFor="mobileNumber" className="block text-xs font-semibold text-gray-700 mb-2">
                                    Mobile Number<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    placeholder="+971 XX XXX XXXX"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-primary/5 border-l-4 border-primary rounded-xl p-5 mb-8">
                        <div className="flex gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="text-sm font-bold text-primary-dark mb-1">What Happens Next?</h4>
                                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                    <li>Our sales team will contact you within 24 hours</li>
                                    <li>We'll discuss pricing, financing, and delivery options</li>
                                    <li>Schedule a viewing or test drive if needed</li>
                                    <li>Complete the purchase with our assistance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <Link
                            to="/"
                            className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold text-sm hover:bg-primary/5 transition-all duration-300 text-center no-underline"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>

                {/* Why Buy From Us Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h4 className="text-base font-bold text-primary-dark mb-2">Certified Quality</h4>
                        <p className="text-sm text-gray-600">All our cars undergo rigorous inspection and come with warranty</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-base font-bold text-primary-dark mb-2">Flexible Financing</h4>
                        <p className="text-sm text-gray-600">Multiple payment options with competitive rates and quick approval</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-base font-bold text-primary-dark mb-2">Fast Delivery</h4>
                        <p className="text-sm text-gray-600">Quick processing and delivery straight to your doorstep</p>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-600 mb-3">
                        Need immediate assistance? Our team is here to help!
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="tel:+971563890299"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-all no-underline"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +971 56 389 0299 / +971 55 531 3061
                        </a>
                        <a
                            href="mailto:syedmaaz@zrscarstrading.com"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-gold/10 text-gold rounded-full text-sm font-semibold hover:bg-gold/20 transition-all no-underline"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            syedmaaz@zrscarstrading.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyForm;
