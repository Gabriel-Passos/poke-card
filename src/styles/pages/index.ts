import styled, { css } from 'styled-components';

interface BackgroundProps {
  type: string;
}

export const Container = styled.main`
  height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundLeft = styled.div<BackgroundProps>`
  width: 100%;
  max-width: 50%;
  height: 100vh;

  position: absolute;
  z-index: 10;
  left: 0;

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
`;

export const BackgroundRight = styled.div<BackgroundProps>`
  width: 100%;
  max-width: 50%;
  height: 100vh;

  position: absolute;
  z-index: 10;
  right: 0;

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
`;
