import { useContext } from "react";

import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { useLeftPanel } from "./useLeftPanel";
import { LeftPanel } from "./styles";

export const LeftPanelComponent = () => {
  const {
    userInformation: { fullName, address, email, floorNumber, amenities },
  } = useContext(Context) as IUserInfoContext;

  const { availableAmenities } = useLeftPanel(amenities);

  return (
    <LeftPanel>
      <h1>Resumen</h1>
      {fullName && <p>Nombre: {fullName}</p>}
      {email && <p>email: {email}</p>}
      {address && <p>address: {address}</p>}
      {floorNumber && <p>piso del departamento: {floorNumber}</p>}
      {amenities && (
        <>
          {availableAmenities.map((availableAmenity) => {
            return <p key={availableAmenity}>✔️ {availableAmenity}</p>;
          })}
        </>
      )}
    </LeftPanel>
  );
};
