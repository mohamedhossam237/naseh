import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import LawFirm from "../components/LawFirm";
import NasehCommunity from "../components/NasehCommunity";
import JoinAsALawyer from "../components/JoinAsALawyer";
import NasehLegalBlog from "../components/NasehLegalBlog";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import WhyNasah from "../components/WhyNasah";
const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <LawFirm />
      <Services />
      <NasehCommunity />
      <JoinAsALawyer />
      <NasehLegalBlog />
      <FrequentlyAskedQuestions />
      <WhyNasah />
      <Footer />
    </div>
  );
};

export default Home;
