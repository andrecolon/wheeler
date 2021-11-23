import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Menu";
import { selectImages } from "../features/image/imgSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const images = useSelector(selectImages);
  return (
    <Container>
      <a href="./">
        <img src="/img/logo.png" alt="Wheeler" />
      </a>
      <Menu>
        {images &&
          images.map((image, index) => (
            <a key={index} href="./" alt="">
              {image}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <Menu>
          <a href="./">About</a>
          <a href="./">Payments</a>
          <a href="./">Contact</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </Menu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="./">Hello</a>
        </li>
        <li>
          <a href="./">Nurse</a>
        </li>
        <li>
          <a href="./">What's</a>
        </li>
        <li>
          <a href="./">Up</a>
        </li>
        <li>
          <a href="./">Phone: (844) 344-2177 </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: white;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 10px;
    flex-wrap: no-wrap;
  }
`;
const CustomClose = styled(CloseIcon)`
  cusror: pointer;
`;
const CustomMenu = styled(MenuIcon)`
  cusror: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  width: 300px;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 900;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
