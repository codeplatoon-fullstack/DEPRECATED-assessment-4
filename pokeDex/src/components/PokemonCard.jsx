import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { CardContent } from "./CardContent";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const pickBackGroundColor = (type) => {
    switch(type){
        case "grass":
            return "green"
        case "fire":
            return "red"
        case "water":
            return "blue"
        case "flying":
            return "lightblue"
        case "electric":
            return "yellow"
        case "ground":
            return "darkbrown"
        case "rock":
            return "brown"
        default:
            return "silver"
    }
}

export const addPokemonToMyTeam = (pokeInfo, caughtPokemon, setCaughtPokemon) => {
    if (caughtPokemon.some(poke => poke.name === pokeInfo.name)){
        setCaughtPokemon( caughtPokemon.filter((pokemon)=> pokemon.name !== pokeInfo.name))
    }
    else{
        setCaughtPokemon([...caughtPokemon, pokeInfo])
    }
}


export const PokemonCard = ({type, name, moveOne, moveTwo, moveThree, moveFour, pokemonImg, caughtPokemon, setCaughtPokemon}) => {
    const [backgroundColor, setBackGroundColor] = useState('white')
    let pokeInfo = {
        name : name,
        type : type,
        moveOne : moveOne,
        moveTwo : moveTwo,
        moveThree : moveThree,
        moveFour : moveFour,
        pokemonImg : pokemonImg
    }

    useEffect(()=> {
        setBackGroundColor(pickBackGroundColor(type))
    }, [])


    return (
        <Card style={{width:"30vw", backgroundColor}}>
            <Card.Img variant="top" src={pokemonImg} />
            <CardContent 
                name = {name}
                moveOne = {moveOne}
                moveTwo = {moveTwo}
                moveThree = {moveThree}
                moveFour = {moveFour}
            />
            <Button variant="outline-primary"><Link to="/">Home</Link></Button>
            <Button variant="outline-dark" onClick={()=> addPokemonToMyTeam(pokeInfo, caughtPokemon, setCaughtPokemon)}>Catch / Release</Button>
        </Card>
    )
}