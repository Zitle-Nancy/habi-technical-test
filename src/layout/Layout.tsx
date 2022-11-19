import { ContentComponent } from "../components/content";
import { HeaderComponent } from "../components/header";
import { LeftPanelComponent } from "../components/leftPanel";
import { Container, Footer } from "./styles";
import { LayoutContextProvider } from "./useLayoutContext";

export const Layout = () => {
  return (
    <Container>
      <HeaderComponent />
      <LayoutContextProvider>
        <ContentComponent />
        <LeftPanelComponent />
      </LayoutContextProvider>
      <Footer>footer</Footer>
    </Container>
  );
};
