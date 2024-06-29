import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./homepage.css";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="homePageDiv flex flex-col justify-center items-center">
        <h3
          className="headingTitleForHome"
          style={{ fontFamily: "Poppins,sans-serif" }}
        >
          Get Your Chess Games, Analyzed fast
        </h3>
        <h4 className="subtitleHeaderForHome">
          Whether you choose efficiency or flexibility for your chess game
          review. This tool will always be there for the rescue! :D
        </h4>
        <br />
        <div className="buttonsDivForHome">
          <input type="button" className='allServicesBtn'/>
          <input type="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
