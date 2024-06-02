import React, { useState } from 'react';

function Character({ character }) {
  // ❗ Add the props
  const { name, birth_year, gender, height, mass, homeworld } = character;

  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
      <div>
        <h3>{name}</h3>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <button onClick={toggleHomeworld}>
          {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}
        </button>
        {showHomeworld && (
          <div>
            <h4>Homeworld</h4>
            <p>Name: {homeworld.name}</p>
            <p>Climate: {homeworld.climate}</p>
            <p>Terrain: {homeworld.terrain}</p>
            <p>Population: {homeworld.population}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Character;
