import { useContext } from "react";
import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { LeftPanel } from "./styles";

export const LeftPanelComponent = () => {
  const {
    userInformation: { fullName, address, email, floorNumber },
  } = useContext(Context) as IUserInfoContext;

  return (
    <LeftPanel>
      <h1>Resumen</h1>
      {fullName && <p>Nombre: {fullName}</p>}
      {email && <p>email: {email}</p>}
      {address && <p>address: {address}</p>}
      {floorNumber && <p>piso del departamento: {floorNumber}</p>}
    </LeftPanel>
  );
};
