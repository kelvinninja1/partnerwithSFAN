import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Header";
import TrustedBrands from "../components/TrustedBrands";
import CallToAction from "../components/CallToAction";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <TrustedBrands />
    </>
  );
};

export default Home;
