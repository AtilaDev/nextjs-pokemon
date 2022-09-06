import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import localFavorites from '../../utils/localFavorites';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title='Pokémons - Favoritos'>
      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemon={favoritePokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
