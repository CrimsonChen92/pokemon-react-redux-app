import React from "react";

// function switchToPokemonTCG() {
//   window.location.href = "http://localhost:3000/PokemonTcg";
// }
// function switchToPokemonSet() {
//   window.location.href = "http://localhost:3000/PokemonSets";
// }

// function switchToMyCardList() {
//   window.location.href = "http://localhost:3000/MyCardList";
// }

function leftColumn() {
  return (
    <div className="column side">
      <div class="container">
        <h1 style={{ textAlign: "center" }}>
          <strong>Navigation</strong>
        </h1>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://localhost:3000/PokemonTcg"
              style={{ fontSize: "20px" }}
            >
              Switch to My Card List
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://localhost:3000/PokemonSets"
              style={{ fontSize: "20px" }}
            >
              Switch to Pokemon TCG App
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://localhost:3000/MyCardList"
              style={{ fontSize: "20px" }}
            >
              Switch to Pokemon Sets
            </a>
          </li>
        </ul>
        {/* <h3 onClick={switchToMyCardList} class="btn btn-primary btn-lg">
        Switch to My Card List
      </h3>
      <break />
      <h3 onClick={switchToPokemonTCG} class="btn btn-primary">
        Switch to Pokemon TCG App
      </h3>
      <h3 onClick={switchToPokemonSet} class="btn btn-primary">
        Switch to Pokemon Sets
      </h3> */}
      </div>
    </div>
  );
}

export default leftColumn;
