import React from "react";
import { NavLink } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
 
 
 import './Bannner.css'

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar/>
          <div className="col-md-6">
            <h1 className="title">
             THE BEST FITNESS STUDIO <br /> IN TOWN
            </h1>
            <p className="text-white text-center mt-3">
            Our virtual training platform offers world-class, signature programming designed to get you stronger and fitter, faster than ever before, and ready to win at the sport of life.
            </p>
            <NavLink to="about" className="mt-3 btn text-white about-btn">About Us</NavLink>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;