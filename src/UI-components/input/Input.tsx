import { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Asterisk, Box, ErrorMessage, Flex, FormInput, Label } from "./styles";

interface IFormInput {
  label: string;
  type: string;
  handleOnChange: () => void;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any> | null;
  defaultValue?: string;
  required?: boolean;
}

export const Input = ({
  label,
  type,
  handleOnChange,
  placeholder,
  name,
  register = null,
  defaultValue = "",
  required = false,
}: IFormInput) => {
  const [value, setValue] = useState(defaultValue);
  console.log(value, "value");

  return (
    <Box>
      <Label>
        {label} {required && <Asterisk>*</Asterisk>}
      </Label>
      <Flex>
        <FormInput
          placeholder={placeholder}
          value={value}
          type={type}
          {...(register &&
            register(name, {
              required: { value: required, message: "Campo requerido" },
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value),
            }))}
        />
        {false && <ErrorMessage>Error</ErrorMessage>}
      </Flex>
    </Box>
  );
};
