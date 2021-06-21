import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function PokemonSets() {
  let [pokSet, setPokSet] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/sets", {
      method: "GET",
      headers: {
        "X-Api-Key": "818ec6bb-1fb3-4d9b-96f2-b7de4fb600f4",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPokSet(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (pokSet === null) {
    return <div class="spinner-border text-primary"></div>;
  }

  function renderPokSet() {
    //pagination
    const startingIndex = pageNumber;
    const endingIndex = Math.min(startingIndex + 20, pokSet.data.length);
    const items = [];
    for (let i = startingIndex; i < endingIndex; i++) {
      items.push(<PokemonCard cards={pokSet.data[i]} />);
    }
    return items;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{renderPokSet()}</div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary"
          style={{ margin: "20px" }}
          onClick={() => {
            setPageNumber((preState) => {
              if (preState - 20 > 0) {
                return preState - 20;
              }
              return 0;
            });
          }}
        >
          Previous
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style={{ margin: "20px" }}
          onClick={() => {
            setPageNumber((preState) => {
              if (preState + 20 < pokSet.data.length) {
                return preState + 20;
              }

              return preState;
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function PokemonCard({ cards }) {
  return (
    <div>
      <div class="columns">
        <div
          class="col-sm-4"
          style={{ height: "300px", width: "200px", borderColor: "green" }}
        >
          <div class="card text-center">
            <img
              class="card-img-top"
              src={cards.images.logo}
              width="100px"
              height="100px"
              atl="cardSet"
            />
            <div class="card-body" style={{ height: "160px" }}>
              <h3 class="card-title">
                <strong>Pokemon Set Name:</strong> {cards.name}
              </h3>
              <p>
                <strong>Date Released:</strong> {cards.releaseDate}
              </p>
              <p>
                <strong>Total Number of Cards in Set:</strong> {cards.total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PokemonSets };
