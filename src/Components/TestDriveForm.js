import React from "react";

const TestDriveForm = () => {
  return (
    <div className="sellcontainer">
      <h1 className="title">Test Drive</h1>
      <form className="form">
        <p className="subtitle">Fill all details</p>
        <div className="formInputWrapper">
          <div className="formGrid">
            {/* Full Name */}
            <div className="formGroup">
              <label htmlFor="fullName">
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your Full Name"
              />
            </div>

            {/* Email Address */}
            <div className="formGroup">
              <label htmlFor="email">
                Email Address<span>*</span>
              </label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>

            {/* Mobile Number */}
            <div className="formGroup">
              <label htmlFor="mobileNumber">
                Mobile Number<span>*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                placeholder="Enter Your Mobile Number"
              />
            </div>

            {/* Date */}
            <div className="formGroup">
              <label htmlFor="date">
                Date<span>*</span>
              </label>
              <input type="date" id="date" />
            </div>
          </div>

          {/* Description */}
          <div className="formGroup">
            <label htmlFor="description">
              Select Time<span>*</span>
            </label>
            <div className="radioButtonRow">
              <div className="singleRadio">
                <input name="time" id="1" type="radio" />
                <label htmlFor="1">11:00 AM</label>
              </div>
              <div className="singleRadio">
                <input name="time" id="2" type="radio" />
                <label htmlFor="2">11:30 AM</label>
              </div>
              <div className="singleRadio">
                <input name="time" id="3" type="radio" />
                <label htmlFor="3">12:00 PM</label>
              </div>
              <div className="singleRadio">
                <input name="time" id="4" type="radio" />
                <label htmlFor="4">12:30 PM</label>
              </div>
              <div className="singleRadio">
                <input name="time" id="5" type="radio" />
                <label htmlFor="5">01:00 PM</label>
              </div>
              <div className="singleRadio">
                <input name="time" id="6" type="radio" />
                <label htmlFor="6">01:30 PM</label>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="formActions">
            <button type="button" className="cancelButton">
              Cancel
            </button>
            <button type="submit" className="saveButton">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TestDriveForm;
