import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
  fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error('Erro ao buscar piada:', error));
  }, []);

  return (
    <div className="App">
      <h1>Piada do Chuck Norris</h1>
      <p>{joke}</p>
    </div>
  );
}

export default App;

