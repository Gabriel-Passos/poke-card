import { AppProps } from 'next/app';

import { PokemonDataProvider }from '../hooks/getPokemonData';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PokemonDataProvider>
        <Component {...pageProps} />
      </PokemonDataProvider>
    </>
  )
}

export default MyApp
