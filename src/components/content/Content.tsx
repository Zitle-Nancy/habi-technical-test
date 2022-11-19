import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Content } from "./styles";
export const ContentComponent = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};
