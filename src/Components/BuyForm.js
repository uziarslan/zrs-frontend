import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Flash from "./Flash";

const BuyForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
    });
    const [message, setMessage] = useState({});

    const { setIsLoading, submitTestDriveForm } = useContext(AuthContext);
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
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
        <>
            <Flash message={message} />
            <div className="sellcontainer max-width">
                <h1 className="title">Buy Now</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="subtitle">Fill All Detail, we will contact you.</p>
                    <div className="formInputWrapper">
                        <div className="formGrid">
                            {/* First Name */}
                            <div className="formGroup">
                                <label htmlFor="firstName">
                                    First Name<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your First Name"
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="formGroup">
                                <label htmlFor="lastName">
                                    Last Name<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Last Name"
                                    required
                                />
                            </div>

                            {/* Email Address */}
                            <div className="formGroup">
                                <label htmlFor="email">
                                    Email Address<span>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="formGroup">
                                <label htmlFor="mobileNumber">
                                    Mobile Number<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Mobile Number"
                                    required
                                />
                            </div>
                        </div>
                        {/* Form Actions */}
                        <div className="formActions">
                            <Link className="cancelButton" to="/">
                                Cancel
                            </Link>
                            <button type="submit" className="saveButton">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BuyForm;