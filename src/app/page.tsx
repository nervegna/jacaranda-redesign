"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Spaces from "@/components/Spaces";
import ReggioApproach from "@/components/ReggioApproach";
import AgeGroups from "@/components/AgeGroups";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Spaces />
        <ReggioApproach />
        <AgeGroups />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
