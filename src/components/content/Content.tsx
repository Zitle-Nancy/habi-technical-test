import { Outlet, useLocation } from "react-router-dom";

import { Content } from "./styles";
import { WelcomeComponent } from "./WelcomeComponent";

export const ContentComponent = () => {
  const { pathname } = useLocation();
  return (
    <Content>{pathname === "/" ? <WelcomeComponent /> : <Outlet />}</Content>
  );
};
