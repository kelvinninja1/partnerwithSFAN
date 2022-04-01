import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Header";
import TrustedBrands from "../components/TrustedBrands";
import CallToAction from "../components/CallToAction";
import CallToActionBottom from "../components/CallToActionBottom";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <CallToActionBottom />
      <TrustedBrands />
    </>
  );
};

export default Home;
