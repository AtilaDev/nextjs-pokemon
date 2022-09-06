import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
  favoritePokemon: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemon }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritePokemon.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
