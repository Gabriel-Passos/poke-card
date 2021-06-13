import { createContext, useContext, useState } from "react";

import { PokemonData } from "../types";

import { api } from "../services/api";

interface PokemonContextData {
  pokemon: PokemonData;
  getPokemonData: () => void;
}

const PokemonDataContext = createContext({} as PokemonContextData);

export const PokemonDataProvider:React.FC = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokemonData>({} as PokemonData);

  const getPokemonData = async () => {
    const min = Math.ceil(0);
    const max = Math.floor(898);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
  
    const response = await api.get(`/pokemon/${randomNumber}`);

    setPokemon(response.data);
  }

  return (
    <PokemonDataContext.Provider value={{
      pokemon,
      getPokemonData,
    }}>
      { children }
    </PokemonDataContext.Provider>
  );
} 

export const usePokemon = () => {
  const context = useContext(PokemonDataContext);

  return context;
}