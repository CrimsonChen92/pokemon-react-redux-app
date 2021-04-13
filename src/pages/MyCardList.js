import React, { useState } from "react";
import { connect } from "react-redux";

function EachAddedCard({ cardsList, removeCards }) {
  console.log("cardList", cardsList);
  return (
    <div class="columns">
      <div class="col-sm-3" style={{ height: "500px", width: "300px" }}>
        <img src={cardsList.images.small} width="200px" />
        <p>From Pokemone Set: {cardsList.set.name}</p>
        <br />
        Updated price from TCGPlayers.com as of:
        <strong>{cardsList?.tcgplayer?.updatedAt}</strong>
        <br />
        <p>
          Market Price: Normal:
          {cardsList?.tcgplayer?.prices?.normal?.market === undefined ? (
            <strong> unavailable</strong>
          ) : (
            <strong> ${cardsList?.tcgplayer?.prices?.normal?.market}</strong>
          )}
          <br />
          Market Price: Reverse Holofoil:
          {cardsList?.tcgplayer?.prices?.reverseHolofoil?.market ===
          undefined ? (
            <strong>unavailable</strong>
          ) : (
            <strong>
              ${cardsList?.tcgplayer?.prices?.reverseHolofoil?.market}
            </strong>
          )}
          <br />
          Market Price: Holofoil:
          {cardsList?.tcgplayer?.prices?.holofoil?.market === undefined ? (
            <strong>unavailable</strong>
          ) : (
            <strong>${cardsList?.tcgplayer?.prices?.holofoil?.market}</strong>
          )}
          <br />
          Market Price: 1st Edition Holofoil:
          {cardsList?.tcgplayer?.prices?.["1stEditionHolofoil"]?.market ===
          undefined ? (
            <strong>unavailable</strong>
          ) : (
            <strong>
              ${cardsList?.tcgplayer?.prices?.["1stEditionHolofoil"]?.market}
            </strong>
          )}
        </p>
        <button
          class="btn btn-danger"
          onClick={() => {
            removeCards(cardsList.id);
          }}
        >
          Remove Card From List
        </button>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => {
  return {
    removeCards: (id) => {
      dispatch({
        type: "REMOVE_CARDS",
        id: id,
      });
    },
  };
};

const EachCard = connect(null, mapDispatch)(EachAddedCard);

function MyCardList({ AddedCards }) {
  console.log("AddedCards", AddedCards);

  function mapAddedCards() {
    let newArray = [];
    newArray.push(
      AddedCards.map((x) => {
        return <EachCard cardsList={x} />;
      })
    );
    return newArray;
  }

  if (AddedCards.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>
          Go to Pokemon TCG Page to Add Cards
        </h2>
        <a
          class="nav-link"
          href="http://localhost:3000/PokemonTcg"
          style={{ fontSize: "20px", textAlign: "center" }}
        >
          Go To Pokemon TCG App
        </a>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> You Card List Below</h2>
      <div>{mapAddedCards()}</div>
    </div>
  );
}

function M(state) {
  //this is connected to reducx, so the state that was saved now can be pulled as my cardList. Thru state
  return {
    AddedCards: state,
  };
}

const CardConnect = connect(M)(MyCardList);

export { CardConnect as MyCardList };
