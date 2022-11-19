import { createContext } from "react";
import { ContentComponent } from "../components/content";
import { HeaderComponent } from "../components/header";
import { Container, Footer, LeftPanel } from "./styles";
import { LayoutContextProvider } from "./useLayoutContext";

export const Layout = () => {
  return (
    <Container>
      <HeaderComponent />
      <LayoutContextProvider>
        <ContentComponent />
        <LeftPanel>detalle</LeftPanel>
      </LayoutContextProvider>
      <Footer>footer</Footer>
    </Container>
  );
};
