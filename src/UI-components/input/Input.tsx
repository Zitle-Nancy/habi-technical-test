import { UseFormRegister } from "react-hook-form";
import { Typography } from "../typography";

import { Asterisk, Box, ErrorMessage, Flex, FormInput } from "./styles";

interface IFormInput {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any> | null;
  defaultValue?: string;
  required?: boolean;
  error: string;
}

export const Input = ({
  label,
  type,
  placeholder,
  name,
  register = null,
  required = false,
  error,
}: IFormInput) => {
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
          // value={value}
          type={type}
          {...(register &&
            register(name, {
              required: { value: required, message: "Campo requerido" },
            }))}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Flex>
    </Box>
  );
};
