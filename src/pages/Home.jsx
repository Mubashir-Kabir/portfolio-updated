import React from "react";
import ContactForm from "../Components/ContactForm";
import HomeBanner from "../Components/HomeBanner";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
