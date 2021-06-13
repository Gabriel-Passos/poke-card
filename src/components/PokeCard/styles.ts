import styled, { css, keyframes } from 'styled-components';

interface PokeTypeItemProps {
  type: string;
}

export const Container = styled.button`
  width: 100%;
  max-width: 373px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  z-index: 99;

  background: var(--color-card-background);

  border: 4px solid var(--color-border);
  border-radius: 8px;

  margin: 16px;
`;

export const PokeName = styled.div`
  width: 100%;
  border-bottom: 4px solid var(--color-border);
  text-align: center;
  padding: 8px 0;

  strong {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-text);
    text-transform: capitalize;
  }
`;

export const PokeImage = styled.div`
  margin-top: 16px;
  padding: 16px;

  border: 4px solid var(--color-border);
  border-radius: 50%;

  background: var(--color-card-white);

  > img {
    width: 124px;
    height: 124px;
  }
`;

export const PokeTypes = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 0;
`;

export const PokeTypeItem = styled.span<PokeTypeItemProps>`
  padding: 4px 8px;

  border: 2px solid var(--color-border);
  border-radius: 5px;

  text-transform: capitalize;

  background: ${props => props.type === 'bug' && css`var(--color-bug)`};
  background: ${props => props.type === 'dark' && css`var(--color-dark)`};
  background: ${props => props.type === 'dragon' && css`var(--color-dragon)`};
  background: ${props => props.type === 'electric' && css`var(--color-eletric)`};
  background: ${props => props.type === 'fairy' && css`var(--color-fairy)`};
  background: ${props => props.type === 'fighting' && css`var(--color-fighting)`};
  background: ${props => props.type === 'fire' && css`var(--color-fire)`};
  background: ${props => props.type === 'flying' && css`var(--color-flying)`};
  background: ${props => props.type === 'ghost' && css`var(--color-ghost)`};
  background: ${props => props.type === 'grass' && css`var(--color-grass)`};
  background: ${props => props.type === 'ground' && css`var(--color-ground)`};
  background: ${props => props.type === 'ice' && css`var(--color-ice)`};
  background: ${props => props.type === 'normal' && css`var(--color-normal)`};
  background: ${props => props.type === 'poison' && css`var(--color-poison)`};
  background: ${props => props.type === 'psychic' && css`var(--color-psychic)`};
  background: ${props => props.type === 'rock' && css`var(--color-rock)`};
  background: ${props => props.type === 'steel' && css`var(--color-steel)`};
  background: ${props => props.type === 'water' && css`var(--color-water)`};

  & + span {
    margin-left: 8px;
  }
`;

export const PokeStats = styled.article`
  width: 90%;

  margin-bottom: 16px;
  padding: 16px 0 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  border: 4px solid var(--color-border);
  border-radius: 8px;

  background: var(--color-card-white);

  color: var(--color-text);

  > strong {
    font-size: 18px;
    font-weight: 600;

    border-bottom: 2px solid var(--color-border);
  }
`;

export const PokeStatsItem = styled.div`
  width: 100%;

  padding: 0 16px;
  margin-top: 16px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  > p {
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }

  & + div {
    margin-top: 8px;
  }
`;