// import React from "react";
import "./Hero.css";
import Logo from "../../images/logo/logo.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="logo">
        <img src={Logo} alt="" />
        <div className="sls">|</div>
        <div className="text">INPIROOM</div>
      </div>
      <div className="userREg">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="signup">
          SignUp
        </a>
      </div>
    </div>
  );
};

export default Hero;
