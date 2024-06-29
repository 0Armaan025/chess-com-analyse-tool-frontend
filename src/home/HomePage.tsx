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
          <input
            type="button"
            className="allServicesBtn"
            value="All services"
          />
          <input
            type="button"
            className="bookADemoBtn"
            value="Analyze the game"
          />
        </div>
        <br />
        <div className="bannerImageRow">
          <img
            src="https://plus.unsplash.com/premium_photo-1672855191351-e26398f27e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlc3N8ZW58MHx8MHx8fDA%3D"
            style={{ width: "400px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1683645480614-55a5957b6343?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3N8ZW58MHx8MHx8fDA%3D"
            style={{ width: "400px", marginLeft: "30px" }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
