import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { Typography } from "../../UI-components";
import { Button } from "../../UI-components/button";
import { Checkbox } from "../../UI-components/checkbox";
import { AMENITIES_OPTIONS } from "./constants";
import { Flex, Form, Wrapper } from "./styles";
import { IAmenitiesOptions } from "./types";

export const AmenitiesForm = () => {
  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setUserInformation({ ...userInformation, amenities: data });
    navigate("/details");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        display="block"
        margin="0 0 0.75rem 0"
        fontWeight="400"
        fontSize="20px"
        color="#252129"
      >
        Selecciona si el departamento tiene alguna de las siguientes opciones:
      </Typography>
      <Wrapper>
        <Flex>
          {AMENITIES_OPTIONS.map(
            (amenity: IAmenitiesOptions, index: number) => {
              return (
                <Checkbox
                  register={register}
                  name={AMENITIES_OPTIONS[index].id}
                  registerName={AMENITIES_OPTIONS[index].name}
                  key={amenity.name}
                  textLabel={amenity.name}
                />
              );
            }
          )}
        </Flex>
        <Button type="submit" text="Ver resumen →" borderRadius="8px" />
      </Wrapper>
    </Form>
  );
};
