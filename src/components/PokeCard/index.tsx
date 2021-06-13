import { usePokemon } from '../../hooks/getPokemonData';
import { 
  Container,
  PokeName,
  PokeImage,
  PokeTypes,
  PokeTypeItem,
  PokeStats,
  PokeStatsItem
} from './styles';

interface PokeCardProps {
  name: string;
  image: string;
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

export const PokeCard: React.FC<PokeCardProps> = ({ 
  name,
  image,
  types,
  stats
 }) => {
  const { getPokemonData } = usePokemon();

  return (
    <Container onClick={getPokemonData}>
      <PokeName>
        <strong>{name}</strong>
      </PokeName>

      <PokeImage>
        <img src={image} alt={name} />
      </PokeImage>

      <PokeTypes>
        {types?.map((type) => (
          <PokeTypeItem 
            key={type.type.name} 
            type={type.type.name}
          > 
            {type.type.name} 
          </PokeTypeItem>
        ))}
      </PokeTypes>
      
      <PokeStats>
        <strong>Basic Stats</strong>

        {stats?.map((stat) => (
          <PokeStatsItem key={stat.stat.name}>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </PokeStatsItem>
        ))}        
      </PokeStats>
    </Container>
  );
}