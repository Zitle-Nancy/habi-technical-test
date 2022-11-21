import { useLocation } from "react-router-dom";
import { ContentComponent } from "../components/content";
import { HeaderComponent } from "../components/header";
import { Logo } from "../components/header/Logo";
import { LeftPanelComponent } from "../components/leftPanel";
import { Typography } from "../UI-components";
import { Container, Footer } from "./styles";
import { LayoutContextProvider } from "./useLayoutContext";

export const Layout = () => {
  const { pathname } = useLocation();
  const EXTEND_LEFT_PANEL = pathname === "/details";
  const HIDE_LEFT_PANEL =
    pathname === "/" || pathname === "/fullname" || EXTEND_LEFT_PANEL;

  return (
    <Container
      hideLeftPanel={HIDE_LEFT_PANEL}
      extendLeftPanel={EXTEND_LEFT_PANEL}
    >
      <HeaderComponent />
      <LayoutContextProvider>
        <ContentComponent />
        {!HIDE_LEFT_PANEL && <LeftPanelComponent />}
      </LayoutContextProvider>
      <Footer>
        <Logo width="40px" height="40px" />
        <Typography color="#272d4e" fontSize="16px">
          2022 Habi® Todos los derechos reservados.
        </Typography>
      </Footer>
    </Container>
  );
};
