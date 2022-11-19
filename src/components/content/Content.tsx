import { Outlet } from "react-router-dom";

import { Content } from "./styles";
export const ContentComponent = () => {
  return (
    <Content>
      aquí ira el contenido
      <Outlet />
    </Content>
  );
};
