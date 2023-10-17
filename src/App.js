import React, { useState, useEffect } from "react";


const App = () => {
  const [joke, setJoke] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error("Erro ao buscar piada:", error));
  }, []);

  const handleLike = () => {
    const newFavorites = [...favorites, joke];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleDelete = (index) => {
    if (window.confirm("Tem certeza que quer deletar?")) {
      const newFavorites = favorites.filter((_, i) => i !== index);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  return (
    <div className="App">
      <h1>Piada do Chuck Norris</h1>
      <p>{joke}</p>
      <button onClick={handleLike}>Adicionar aos favoritos</button>
      <h2>Favoritos:</h2>
      {favorites.map((fav, index) => (
        <div key={index}>
          <p>{fav}</p>
          <button onClick={() => handleDelete(index)}>Deletar</button>
        </div>
      ))}
    </div>
  );
};

export default App;
