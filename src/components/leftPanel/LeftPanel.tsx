import { useContext } from "react";
import { IAmenities, IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { LeftPanel } from "./styles";

const amenidades = ["Zona BBQ", "Salón comunal", "Parque de juegos"];
export const LeftPanelComponent = () => {
  const {
    userInformation: { fullName, address, email, floorNumber, amenities },
  } = useContext(Context) as IUserInfoContext;

  const amenidadesTest = amenidades.filter(
    (amenidad: string, index: number) => {
      return amenities && amenities[amenidad] !== false;
    }
  );

  console.log(amenidadesTest, "amenidadesTest");

  return (
    <LeftPanel>
      <h1>Resumen</h1>
      {fullName && <p>Nombre: {fullName}</p>}
      {email && <p>email: {email}</p>}
      {address && <p>address: {address}</p>}
      {floorNumber && <p>piso del departamento: {floorNumber}</p>}
      {amenities && (
        <>
          {amenidadesTest.map((amenidad) => {
            return <p key={amenidad}>{amenidad}</p>;
          })}
        </>
      )}
    </LeftPanel>
  );
};
