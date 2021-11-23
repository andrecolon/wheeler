import React from "react";
import styled from "styled-components";

function Section({ title, description, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
        <DownArrow src="/img/arrow-down.png" />
      </ItemText>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Vertical elements
  align-items: center; // Horizontal elements
  background-image: ${(props) => `url("/img/${props.bgImage}")`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: left;
  color: white;
  background: rgba(124, 109, 123, 0.73);
  width: 30%;
  position: relative;
  left: -30%;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    left: -0%;
    top: 80vh;
    width: 100%;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
