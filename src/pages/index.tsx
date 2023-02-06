import Head from "next/head";
import Home from "../components/home/Home/Home";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Head>
        <title>FALLACY</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
