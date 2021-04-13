import React from "react";

function RightColumn() {
  return (
    <div className="column side">
      <div class="container">
        <h1 style={{ textAlign: "center" }}>
          <strong>Buy Pokemon Cards</strong>
        </h1>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://shop.tcgplayer.com/pokemon"
              style={{ fontSize: "20px" }}
            >
              TCG Players
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://www.ebay.com/"
              style={{ fontSize: "20px" }}
            >
              Ebay
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { RightColumn };
