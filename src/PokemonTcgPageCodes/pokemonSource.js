function SearchCards() {
  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.log(error));
  }, []);
}
