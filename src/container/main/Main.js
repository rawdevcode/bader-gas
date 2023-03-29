import React from "react";
import { Banner, About, Services, Quote, Client } from "../../components";

const Main = () => {
  return (
    <>
      <Banner />
      <Services />
      {/* <Quote /> */}
      <About /> 
      <Client />
    </>
  );
};

export default Main;
