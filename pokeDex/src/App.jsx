import { useState, createContext } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const myPokemon = createContext(null);

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  return (
    <div className="App">
      <Header caughtPokemon={caughtPokemon} />
      <myPokemon.Provider value={{caughtPokemon, setCaughtPokemon}}>
        <Outlet />
      </myPokemon.Provider>
    </div>
  );
}

export default App;
