"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

type Props = {};

const AnalyzeGamePage = (props: Props) => {
  const [pgn, setPgn] = useState("");
  const [analysis, setAnalysis] = useState({
    White: {
      "best moves": [],
      "excellent moves": [],
      "good moves": [],
      mistakes: [],
      blunders: [],
    },
    Black: {
      "best moves": [],
      "excellent moves": [],
      "good moves": [],
      mistakes: [],
      blunders: [],
    },
  });
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pgn }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (error) {
      console.error("Error fetching analysis:", error);
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="text-3xl">Enter your game PGN here</h2>
        <br />
        <textarea
          className="h-72 w-96 border-2 border-black"
          value={pgn}
          onChange={(e) => setPgn(e.target.value)}
        ></textarea>
        <br />
        <input
          type="button"
          value={loading ? "Loading..." : "Get Analysis!"}
          className="px-4 py-2 bg-black hover:bg-[#171717] transition-all cursor-pointer rounded-md text-white"
          onClick={handleAnalyze}
          disabled={loading}
        />
        <br />

        <div className="analysisDiv border border-1 border-black rounded-md p-[1rem]">
          <div className="white-analysis mb-4">
            <h2 className="text-2xl mb-2">White Moves Analysis:</h2>
            <h3>Best Moves: {analysis.White["best moves"].join(", ")}</h3>
            <h3>
              Excellent Moves: {analysis.White["excellent moves"].join(", ")}
            </h3>
            <h3>Good Moves: {analysis.White["good moves"].join(", ")}</h3>
            <h3>Mistakes: {analysis.White["mistakes"].join(", ")}</h3>
            <h3>Blunders: {analysis.White["blunders"].join(", ")}</h3>
          </div>
          <div className="black-analysis">
            <h2 className="text-2xl mb-2">Black Moves Analysis:</h2>
            <h3>Best Moves: {analysis.Black["best moves"].join(", ")}</h3>
            <h3>
              Excellent Moves: {analysis.Black["excellent moves"].join(", ")}
            </h3>
            <h3>Good Moves: {analysis.Black["good moves"].join(", ")}</h3>
            <h3>Mistakes: {analysis.Black["mistakes"].join(", ")}</h3>
            <h3>Blunders: {analysis.Black["blunders"].join(", ")}</h3>
          </div>
        </div>
        <br />

        {/* Render chessboard if needed */}
        {/* <div className="chessBoardRender">
          <Chessboard position={fen} />
        </div> */}
      </div>
    </>
  );
};

export default AnalyzeGamePage;
