import React from "react";
import "./Popup.css";

const Popup = (props) => {

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => props.setTrigger((prev) => !prev)}
        >
          Close
        </button>
        <h3>{props.error}</h3>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
