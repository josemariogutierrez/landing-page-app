import { Header, Hero, MailForm, Footer } from '../sections';
import Head from 'next/head'

const Home = ()=> {
  return (
    <>
      <Head>
        <title>Engineering Exercise - Landing Page App</title>
        <meta name="description" content="Engineering Exercise - Landing Page App" />
        <link rel="stylesheet" href="https://use.typekit.net/esm7pll.css"></link>
      </Head>

      <main>
        <Header></Header>
        <Hero></Hero>
        <MailForm></MailForm>
        <Footer></Footer>
      </main>
    </>
  )
}

export default Home;
