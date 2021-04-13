import React from "react";

function MiddleColumn() {
  return (
    <div className="column middle" style={{ textAlign: "center" }}>
      <h1>
        <strong> Pokemon Price Portfolio</strong>
      </h1>
      <div>
        <img
          src="rarepokemoncards.png"
          alt="cardsPicture"
          width="550px"
          textAlign="center"
        />
      </div>
    </div>
  );
}

export default MiddleColumn;
