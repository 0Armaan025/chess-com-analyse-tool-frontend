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
        <br />
        <textarea className="h-72 w-96 border-2 border-black"></textarea>
        <br />
        <input
          type="button"
          value="Get Analysis!"
          className="px-4 py-2 bg-black hover:bg-[#171717] transition-all cursor-pointer rounded-md text-white"
        />
        <br />

        <div className="analysisDiv border border-1 border-black rounded-md p-[1rem]">
          <h2>Best Moves: e4, Nf3</h2>
          <h2>Excellent Moves: e4, Nf3</h2>
          <h2>Good Moves: e4, Nf3</h2>
          <h2>Mistakes: e4, Nf3</h2>
          <h2>Blunders: e4, Nf3</h2>
        </div>
        <br />

        <div className="chessBoardRender">
          {/* I wanna render the chessboard here  */}
        </div>
      </div>
    </>
  );
};

export default AnalyzeGamePage;
