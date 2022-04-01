import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Header";
import TrustedBrands from "../components/TrustedBrands";
import CallToAction from "../components/CallToAction";
import CallToActionBottom from "../components/CallToActionBottom";
import PartnershipOffering from "../components/PartnershipOffering";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <PartnershipOffering />
      <CallToActionBottom />
      <TrustedBrands />
    </>
  );
};

export default Home;
