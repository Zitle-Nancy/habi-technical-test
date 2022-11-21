import { useContext } from "react";

import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { useLeftPanel } from "./useLeftPanel";
import { LeftPanel } from "./styles";
import { Typography } from "../../UI-components";

export const LeftPanelComponent = ({
  isExtended,
}: {
  isExtended?: boolean;
}) => {
  const {
    userInformation: { fullName, address, email, floorNumber, amenities },
  } = useContext(Context) as IUserInfoContext;

  const { availableAmenities } = useLeftPanel(amenities);

  return (
    <LeftPanel isExtended={isExtended}>
      <Typography
        color="#9634ff"
        fontWeight="600"
        fontSize="22px"
        display="block"
        margin="0 0 2rem 0"
      >
        RESUMEN
      </Typography>
      {fullName && (
        <Typography
          color="#6d6970"
          fontSize="20px"
          fontWeight="bold"
          margin="0 0 1rem 0"
          display="block"
        >
          Nombre:{" "}
          <Typography color="#6d6970" fontSize="20px">
            {fullName}
          </Typography>
        </Typography>
      )}
      {email && (
        <Typography
          color="#6d6970"
          fontSize="20px"
          fontWeight="bold"
          display="block"
          margin="0 0 1rem 0"
        >
          Email:{" "}
          <Typography color="#6d6970" fontSize="20px">
            {email}
          </Typography>
        </Typography>
      )}
      {address && (
        <Typography
          color="#6d6970"
          fontSize="20px"
          fontWeight="bold"
          display="block"
          margin="0 0 1rem 0"
        >
          Dirección:{" "}
          <Typography color="#6d6970" fontSize="20px">
            {address}
          </Typography>
        </Typography>
      )}
      {floorNumber && (
        <Typography
          color="#6d6970"
          fontSize="20px"
          fontWeight="bold"
          display="block"
          margin="0 0 1rem 0"
        >
          Nº de piso del departamento:{" "}
          <Typography color="#6d6970" fontSize="20px">
            {floorNumber}
          </Typography>
        </Typography>
      )}
      {!!availableAmenities.length && (
        <>
          <Typography
            color="#6d6970"
            fontSize="20px"
            fontWeight="bold"
            margin="0 0 1rem 0"
            display="block"
          >
            Amenidades:{" "}
          </Typography>
          {availableAmenities.map((availableAmenity) => {
            return (
              <Typography
                color="#6d6970"
                fontSize="20px"
                display="block"
                key={availableAmenity}
              >
                ✔️ {availableAmenity}
              </Typography>
            );
          })}
        </>
      )}
    </LeftPanel>
  );
};
