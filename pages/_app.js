import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Head>
          <title>Hangsihak Sin</title>
          <meta name='description' content='Hangsihak Sin' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
