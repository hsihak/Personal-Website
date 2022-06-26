import '../styles/globals.scss'; // Some default globals styling
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout'; // Layout that wrap itself with navbar and footer around its children
import Head from 'next/head'; // Display Website Title on Browser Tab

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
