import { Step } from "../step";
import { Header } from "./styles";

import { Logo } from "./Logo";

export const HeaderComponent = () => {
  return (
    <Header>
      <Logo width="70px" height="70px" />
      <Step />
    </Header>
  );
};
