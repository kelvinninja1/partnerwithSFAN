// noinspection JSUnusedGlobalSymbols

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
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="SFAN is unlocking the potential of Africa's young geniuses by helping them turn their passion into businesses and fulfilling careers."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.sfanonline.org/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.sfanonline.org/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.sfanonline.org/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://www.sfanonline.org/site.webmanifest"
        />
        <title>
          SFAN - unlocking employment and entrepreneurship potential of African
          youth
        </title>
      </Head>
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
