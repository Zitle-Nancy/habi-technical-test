import { useLocation } from "react-router-dom";
import { ContentComponent } from "../components/content";
import { HeaderComponent } from "../components/header";
import { LeftPanelComponent } from "../components/leftPanel";
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
      <Footer></Footer>
    </Container>
  );
};
