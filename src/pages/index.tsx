import Head from 'next/head'
import { useEffect, useState } from 'react';

import { PokeCard } from '../components/PokeCard';

import { 
  Container, 
  BackgroundLeft, 
  BackgroundRight 
} from '../styles/pages/index';
import { usePokemon } from '../hooks/getPokemonData';

export default function Home() {
  const { getPokemonData, pokemon } = usePokemon();

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <>
      <Head>
        <title>Poke Card</title>
      </Head>

      <Container>
        {pokemon.types?.map((type) => (
          <>
            <BackgroundLeft key={type.type.name} type={type.type.name} />
            <PokeCard 
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
              stats={pokemon.stats}
            />
            <BackgroundRight type={type.type.name} />
          </>
        ))}
      </Container>
    </>
  )
}
