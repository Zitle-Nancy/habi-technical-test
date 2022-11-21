import { useLocation } from "react-router-dom";
import { ContentComponent } from "../components/content";
import { HeaderComponent } from "../components/header";
import { Logo } from "../components/header/Logo";
import { DetailsPanelComponent } from "../components/detailsPanel";
import { Typography } from "../UI-components";
import { Container, Footer } from "./styles";
import { LayoutContextProvider } from "./useLayoutContext";

export const Layout = () => {
  const { pathname } = useLocation();
  const EXTEND_DETAILS_PANEL = pathname === "/details";
  const HIDE_DETAILS_PANEL =
    pathname === "/" || pathname === "/fullname" || EXTEND_DETAILS_PANEL;

  return (
    <Container
      hideDetailsPanel={HIDE_DETAILS_PANEL}
      extendDetailsPanel={EXTEND_DETAILS_PANEL}
    >
      <HeaderComponent />
      <LayoutContextProvider>
        <ContentComponent />
        {!HIDE_DETAILS_PANEL && <DetailsPanelComponent />}
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
