import { useContext } from "react";
import { useForm } from "react-hook-form";

import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { Checkbox } from "../../UI-components/checkbox";
import { AMENITIES_OPTIONS } from "./constants";
import { IAmenitiesOptions } from "./types";

export const AmenitiesForm = () => {
  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setUserInformation({ ...userInformation, amenities: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>
        Por favor, selecciona si el apartamento tiene alguna de las siguientes
        opciones:
      </h1>
      {AMENITIES_OPTIONS.map((amenity: IAmenitiesOptions, index: number) => {
        return (
          <Checkbox
            register={register}
            name={AMENITIES_OPTIONS[index].id}
            registerName={AMENITIES_OPTIONS[index].name}
            key={amenity.name}
            textLabel={amenity.name}
          />
        );
      })}
      <button type="submit">Ver resumen</button>
    </form>
  );
};
