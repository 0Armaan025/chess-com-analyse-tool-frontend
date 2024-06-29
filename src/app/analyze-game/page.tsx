import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const AnalyzeGamePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="analyzeGamePageDiv flex flex-col justify-center items-center">
        <div
          className="topBgDiv flex flex-col justify-center items-center w-full h-40 bg-[#0b0000] text-white text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          Game Analysis Page
        </div>
        <br />
        <h2 className="text-3xl">Enter your game pgn here </h2>
      </div>
    </>
  );
};

export default AnalyzeGamePage;
