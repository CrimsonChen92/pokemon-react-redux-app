import React from "react";
import { connect } from "react-redux";

function EachCards({ cards, mylist, addcard }) {
  return (
    <div class="columns">
      <div class="col-sm-3" style={{ height: "500px", width: "300px" }}>
        <img src={cards.images.small} width="200px" />
        <p>From Pokemone Set: {cards.set.name}</p>
        <br />
        Updated price from TCGPlayers.com as of:
        <strong>{cards?.tcgplayer?.updatedAt}</strong>
        <br />
        <p>
          Market Price: Normal:
          {cards?.tcgplayer?.prices?.normal?.market === undefined ? (
            <strong> unavailable</strong>
          ) : (
            <strong> ${cards?.tcgplayer?.prices?.normal?.market}</strong>
          )}
          <br />
          Market Price: Reverse Holofoil:
          {cards?.tcgplayer?.prices?.reverseHolofoil?.market === undefined ? (
            <strong>unavailable</strong>
          ) : (
            <strong>
              ${cards?.tcgplayer?.prices?.reverseHolofoil?.market}
            </strong>
          )}
          <br />
          Market Price: Holofoil:
          {cards?.tcgplayer?.prices?.holofoil?.market === undefined ? (
            <strong>unavailable</strong>
          ) : (
            <strong>${cards?.tcgplayer?.prices?.holofoil?.market}</strong>
          )}
          <br />
          Market Price: 1st Edition Holofoil:
          {cards?.tcgplayer?.prices?.["1stEditionHolofoil"]?.market ===
          undefined ? (
            <strong>unavailable</strong>
          ) : (
            <strong>
              ${cards?.tcgplayer?.prices?.["1stEditionHolofoil"]?.market}
            </strong>
          )}
        </p>
        <button
          class="btn btn-primary"
          onClick={() => {
            addcard(cards);
          }}
        >
          add to my list
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mylist: state,
  };
};

const mapDispatch = (dispatcher) => {
  return {
    addcard: (cardss) => {
      dispatcher({
        type: "ADD_CARD",
        datum: cardss,
      });
    },
  };
};

const AddEachCard = connect(mapStateToProps, mapDispatch)(EachCards);

export default AddEachCard;
