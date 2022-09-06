import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({ children, title = 'Pokemon App' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Leandro Favre' />
        <meta
          name='desciption'
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta
          property='og:description'
          content={`Esta es la página sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      {/* NavBar */}
      <Navbar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
