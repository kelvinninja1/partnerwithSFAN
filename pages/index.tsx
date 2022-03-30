import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Header";
import TrustedBrands from "../components/TrustedBrands";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <TrustedBrands />
    </>
  );
};

export default Home;
