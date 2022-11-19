import { ContentComponent } from "../components/content";
import { HeaderComponent } from "../components/header";
import { Container, Footer, LeftPanel } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <HeaderComponent />
      <ContentComponent />
      <LeftPanel>detalle</LeftPanel>
      <Footer>footer</Footer>
    </Container>
  );
};
