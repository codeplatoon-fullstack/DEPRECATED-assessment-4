import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

export const getPokemon = async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`);
  return response.data.results;
};

export const Home = () => {
  const pokemon = useLoaderData()


  return (
    <ol>
      <h2>Home</h2>
      {pokemon.map((poke, idx) => (
        <li key={idx}>
          <Link to={`/assessment-4/pokemon/${poke.name}/`}>{poke.name}</Link>
        </li>
      ))}
    </ol>
  );
};
