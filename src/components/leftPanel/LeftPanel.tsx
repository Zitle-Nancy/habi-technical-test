import { useContext } from "react";
import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { LeftPanel } from "./styles";

export const LeftPanelComponent = () => {
  const {
    userInformation: { fullName, address, email },
  } = useContext(Context) as IUserInfoContext;

  return (
    <LeftPanel>
      <h1>Resumen</h1>
      {fullName && <p>Nombre: {fullName}</p>}
      {address && <p>address: {address}</p>}
      {email && <p>email: {email}</p>}
    </LeftPanel>
  );
};
