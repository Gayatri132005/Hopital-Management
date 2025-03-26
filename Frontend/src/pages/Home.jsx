import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to  Medical Care Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.webp"}
      />
      <Biography imageUrl={"/about.webp"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;