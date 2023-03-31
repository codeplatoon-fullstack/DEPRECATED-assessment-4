import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { CardContent } from "./CardContent";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const pickBackGroundColor = (type) => {
  switch (type) {
    case "grass":
      return "green";
    case "fire":
      return "red";
    case "electric":
      return "yellow";
    case "earth":
      return "brown";
    case "rock":
      return "brown";
    case "water":
      return "blue";
    case "dragon":
      return "purple";
    case "poison":
      return "purple";
    case "flying":
      return "cyan";
    default:
      return "silver";
  }
};

export const addOrDropPokemonToMyTeam = (
  pokeInfo,
  caughtPokemon,
  setCaughtPokemon
) => {
  if (caughtPokemon.length < 6) {
    if (caughtPokemon.some((poke) => poke.name === pokeInfo.name)) {
      setCaughtPokemon(
        caughtPokemon.filter((pokemon) => pokemon.name !== pokeInfo.name)
      );
    } else {
      setCaughtPokemon([...caughtPokemon, pokeInfo]);
    }
  }
};

export const PokemonCard = ({
  type,
  name,
  moveOne,
  moveTwo,
  moveThree,
  moveFour,
  pokemonImg,
  caughtPokemon,
  setCaughtPokemon,
}) => {
  const [backgroundColor, setBackGroundColor] = useState("white");
  let pokeInfo = {
    name: name,
    type: type,
    moveOne: moveOne,
    moveTwo: moveTwo,
    moveThree: moveThree,
    moveFour: moveFour,
    pokemonImg: pokemonImg,
  };

  useEffect(() => {
    setBackGroundColor(pickBackGroundColor(type));
  }, [type]);

  return (
    <Card style={{ width: "30vw", backgroundColor }}>
      <Card.Img variant="top" src={pokemonImg} />
      <CardContent
        name={name}
        moveOne={moveOne}
        moveTwo={moveTwo}
        moveThree={moveThree}
        moveFour={moveFour}
      />
      <Button variant="outline-primary">
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant="outline-dark"
        onClick={() =>
          addOrDropPokemonToMyTeam(pokeInfo, caughtPokemon, setCaughtPokemon)
        }
      >
        Catch / Release
      </Button>
    </Card>
  );
};
