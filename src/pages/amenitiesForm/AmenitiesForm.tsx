import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { Checkbox } from "../../UI-components/checkbox";
import { AMENITIES_OPTIONS } from "./constants";

export const AmenitiesForm = () => {
  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, "data en checkbox");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>
        Por favor, selecciona si el apartamento tiene alguna de las siguientes
        opciones:
      </h1>
      {AMENITIES_OPTIONS.map((amenity: any) => {
        return <Checkbox key={amenity.name} textLabel={amenity.name} />;
      })}
      <button type="submit">Ver resumen</button>
    </form>
  );
};
