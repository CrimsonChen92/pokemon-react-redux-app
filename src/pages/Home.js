import React from "react";
import "./Home.css";
import LeftColumn from "../HomePageCodes/LeftColumn";
import MiddleColumn from "../HomePageCodes/MiddleColumn";
import { RightColumn } from "../HomePageCodes/RightColumn";

function Home() {
  return (
    <div>
      <div className="header">
        <h2>Welcome to the Home Page</h2>
      </div>
      <div className="row">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
      <div className="footer">
        <p>GOTTA COLLECT THEM ALL!!</p>
      </div>
    </div>
  );
}

export { Home };
