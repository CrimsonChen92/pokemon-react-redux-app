import React, { useEffect, useState } from "react";

import SearchBar from "../PokemonTcgPageCodes/searchBar";
import EachCards from "../PokemonTcgPageCodes/cards"; //this is the export default AddEachCard, we just named it EachCards

function PokemonTcg() {
  const [isloading, setLoading] = useState(null);

  const [data, setData] = useState(null);

  // if (isloading === null) {
  //   return <div class="spinner-border text-primary"></div>;
  // }

  function mapCards() {
    const newarray = [];
    newarray.push(
      data.data.map((x) => {
        return <EachCards cards={x} />;
      })
    );
    return newarray;
  }

  if (data === null) {
    return (
      <div>
        <h2>Search your cards</h2>
        <SearchBar liftState={setData} />
      </div>
    );
  } else if (data.count === 0) {
    return (
      <div>
        <h2>No Card exist with that Name</h2>
        <SearchBar liftState={setData} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Your cards are showed below</h2>
        <SearchBar liftState={setData} />
        <div>{mapCards()}</div>
      </div>
    );
  }
}

// function EachCards({ cards }) {
//   return (
//     <div>
//       <div class="card text-center">
//         <img
//           class="card-img-top"
//           src={cards.images.small}
//           width="100%"
//           height="100%"
//         />
//         <p>{cards.set.name}</p>
//       </div>
//     </div>
//   );
// }
export { PokemonTcg };
