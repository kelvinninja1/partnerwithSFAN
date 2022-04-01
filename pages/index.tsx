import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Header";
import TrustedBrands from "../components/TrustedBrands";
import CallToAction from "../components/CallToAction";
import CallToActionBottom from "../components/CallToActionBottom";
import PartnershipOffering from "../components/PartnershipOffering";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <PartnershipOffering />
      <CallToActionBottom />
      <TrustedBrands />
      <Footer />
    </>
  );
};

export default Home;
