import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleResponse = await axios.get(urlPeople);
        const planetsResponse = await axios.get(urlPlanets);

        const peopleWithPlanets = peopleResponse.data.map((person) => ({
          ...person,
          homeworld: planetsResponse.data.find((planet) => planet.id === person.homeworld_id),
        }));

        setCharacters(peopleWithPlanets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
