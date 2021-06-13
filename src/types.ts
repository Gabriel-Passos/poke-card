export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  }
  types: [
    {
      type: {
        name: string;
      }
    }
  ]
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ]
}