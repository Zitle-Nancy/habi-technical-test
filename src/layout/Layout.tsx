import { Content } from "../components/content";
import { HeaderComponent } from "../components/header";
import { Container, Footer, LeftPanel } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <HeaderComponent />
      <Content />
      <LeftPanel>detalle</LeftPanel>
      <Footer>footer</Footer>
    </Container>
  );
};
