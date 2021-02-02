/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { H1sistem } from '../texts/index';
import { MakeSide, Content } from './style';
import SideMenu from '../sideMenus/index';

const Layout = (props) => (
  <>
    <div>
      <MakeSide>
        <SideMenu />
        <H1sistem>{props.titlePage}</H1sistem>
      </MakeSide>
      <Content>
        {props.children}
        {' '}
      </Content>
    </div>
  </>
);

export default Layout;
