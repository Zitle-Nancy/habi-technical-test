import { UseFormRegister } from "react-hook-form";
import { Typography } from "../typography";

import { Asterisk, Box, ErrorMessage, Flex, FormInput } from "./styles";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const RANGE_NUMBER_REGEX = /^(?:[0-9]|[0-4][0-9]|50)$/;
interface IFormInput {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any> | null;
  defaultValue?: string;
  required?: boolean;
  error: string;
}

export const Input = ({
  label,
  type = "text",
  placeholder,
  name,
  register = null,
  required = false,
  error,
}: IFormInput) => {
  const isEmail = name === "email";
  const isFloorNumber = name === "floorNumber";

  return (
    <Box>
      <Typography
        display="block"
        margin="0 0 0.75rem 0"
        fontWeight="400"
        fontSize="1rem"
        color="#252129"
      >
        {label} {required && <Asterisk>*</Asterisk>}
      </Typography>

      <Flex>
        <FormInput
          id={name}
          placeholder={placeholder}
          type={type}
          {...(register &&
            register(name, {
              required: { value: required, message: "Campo requerido" },
            }))}
          {...(register &&
            isEmail &&
            register(name, {
              pattern: {
                value: EMAIL_REGEX,
                message: "Email invalido",
              },
            }))}
          {...(register &&
            isFloorNumber &&
            register(name, {
              pattern: {
                value: RANGE_NUMBER_REGEX,
                message: "Solo se aceptan números del 0 al 50",
              },
            }))}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Flex>
    </Box>
  );
};
