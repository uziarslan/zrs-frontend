import React from "react";
import { Link } from "react-router-dom";

const Confirm = ({ data }) => {
  if (!Array.isArray(data.buttons)) return null;
  return (
    <div className="sellcontainer max-width">
      <h1 className="title">{data.pageTitle}</h1>
      <div className="confirmationContainer">
        <img src={data.confirmImage} alt="Confirmation" />
        <h2 className="confirmationText">{data.confirmText}</h2>
        <div className="confirmationButtonHolder">
          {data.buttons.map((bt, i) => (
            <Link key={i} to={bt.url}>
              <button
                type={data.buttons.length > 1 && i === 0 ? "outline" : "button"}
              >
                {bt.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
