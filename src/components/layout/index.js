import React from "react";
import { H1sistem } from "../texts/index";
import { MakeSide, Content } from "./style";
import SideMenu from "../sideMenus/index";

const Layout = (props) => {

  return (
    <React.Fragment>
      <div>
        <MakeSide>
          <SideMenu />
          <H1sistem>{props.titlePage}</H1sistem>
        </MakeSide>
        <Content>{props.children} </Content>
      </div>
    </React.Fragment>
  );
};

export default Layout;
