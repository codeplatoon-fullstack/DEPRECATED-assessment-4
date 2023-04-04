import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import { getPokemon, Home } from "./Pages/Home";
import { getPokemonDetails, Pokemon } from "./Pages/Pokemon";
import { PokemonTeam } from "./Pages/PokemonTeam";

const router = createBrowserRouter([
  {
    path: "/assessment-4/",
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getPokemon,
      },
      {
        path: "/assessment-4/pokemon/:id/",
        element: <Pokemon />,
        loader: getPokemonDetails,
      },
      {
        path: "/assessment-4/team/",
        element: <PokemonTeam />,
      },
    ],
  },
]);

export default router;
