import React from "react";
import "../Styles/AltLandingPage.css";

const AltLandingPage = () => {
  return (
    <section className="AltLandingPage-container">
      <img
        src={require("../../../../Images/Test-bg-image.jfif")}
        alt=""
        className="bg-image"
      />
      <img
        src={require("../../../Images/Gryphtech logo.png")}
        alt=""
        onClick={() => nav("/")}
      />
      <div className="txt-container">
        <h1>
          We Are <span>Gryphtech</span> Robotics
        </h1>
      </div>
      <div className="btn-container">
        <button>About Us</button>
        <button className="support-btn">Support Us</button>
      </div>
    </section>
  );
};

export default AltLandingPage;
