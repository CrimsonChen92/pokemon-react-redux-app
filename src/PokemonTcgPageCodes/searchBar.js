import React, { useEffect, useState } from "react";

function SearchBar(props) {
  //this props will allow my PokemonTcg to call liftState.
  const [searchText, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleInput = (e) => {
    const text = e.target.value;
    setSearch(text);
  };

  function onSubmit() {
    setLoading(true);
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchText}*`, {
      //v2 have to add api key, which use a method, and headers.
      method: "GET",
      headers: {
        "X-Api-Key": "818ec6bb-1fb3-4d9b-96f2-b7de4fb600f4",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.liftState(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (isLoading === true) {
    // return <div class="spinner-border text-primary"></div>;
    return (
      <button class="btn btn-primary">
        <span class="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    );
  }

  return (
    <div>
      <input
        class="mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleInput}
      ></input>
      {searchText}
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={onSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
