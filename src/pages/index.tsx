import { type NextPage } from "next";
import Head from "next/head";
import YearViewCalender from '../components/YearViewCalender'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Calender App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <YearViewCalender />
      </main>
    </>
  );
};

export default Home;