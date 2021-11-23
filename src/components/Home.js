/** @format */

import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Controller, Scene } from "react-scrollmagic";

function Home() {
  return (
    <Container>
      <Controller>
        <Scene duration={600} pin>
          <Section
            title="Rise, Move Forward "
            description="Wheeler enriches the lives of our patients by offering high quality, quick response services. We provide the expertise, technology, and compassion to help you improve your quality of life."
            backgroundImg="new-name.jpg"
          />
        </Scene>
      </Controller>
      <Section
        title="Enriching Lives"
        description="Wheeler enriches the lives of our patients by offering high quality, quick response services. We provide the expertise, technology, and compassion to help you improve your quality of life."
        backgroundImg="enrich.jpg"
      />
      <Section
        title="We're In the Business of People"
        description="Wheeler enriches the lives of our patients by offering high quality, quick response services. We provide the expertise, technology, and compassion to help you improve your quality of life."
        backgroundImg="business.jpg"
      />
      <Section
        title="For More Than 50 Years"
        description="Wheeler enriches the lives of our patients by offering high quality, quick response services. We provide the expertise, technology, and compassion to help you improve your quality of life."
        backgroundImg="50-years.jpg"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;

// https://www.npmjs.com/package/react-parallax
