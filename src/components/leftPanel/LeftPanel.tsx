import { useContext } from "react";
import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { LeftPanel } from "./styles";

export const LeftPanelComponent = () => {
  const {
    userInformation,
    userInformation: { name, address, email },
  } = useContext(Context) as IUserInfoContext;
  console.log(userInformation, "userInformation");

  return (
    <LeftPanel>
      <h1>Resumen</h1>
      {name && <p>Nombre: {name}</p>}
      {address && <p>address: {address}</p>}
      {email && <p>email: {email}</p>}
    </LeftPanel>
  );
};
