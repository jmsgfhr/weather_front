import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Relogio from '../../assets/imgs/incosSideMenus/relogio.svg';
import Sol from '../../assets/imgs/incosSideMenus/sun.svg';
import '../../constants/colors.css';

const SideMenuUser = styled.div`
  width: 110px;
  height: 100vh;
  background-color: var(--white);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  top: 0;
  left: 0;

  @media only screen and (max-width: 640px) {
    width: 100%;
    height: 10%;
    position: fixed;
    top: auto;
    bottom: 0;
    flex-direction: row;
    z-index: 10;
  }
`;

const ItensSideMenu = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media only screen and (max-width: 640px) {
    height: 100%;
  }
`;

const Img = styled.img`
  width: 40px;
  height: 50px;
  filter: grayscale(100%);
  transition: 0.5s;
  &:focus {
    filter: grayscale(0%);
  }
  &:hover {
    filter: grayscale(0%);
    transition: 0.5s;
  }
  @media only screen and (max-width: 640px) {
    height: 25px;
  }
`;

const SideMenu = () => (
  <SideMenuUser>
    <ItensSideMenu as={Link} to="/">
      <Img src={Sol} />
    </ItensSideMenu>
    <ItensSideMenu as={Link} to="/historico">
      <Img src={Relogio} />
    </ItensSideMenu>
  </SideMenuUser>
);

export default SideMenu;
