import { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Asterisk, Box, ErrorMessage, Flex, FormInput, Label } from "./styles";

interface IFormInput {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any> | null;
  defaultValue?: string;
  required?: boolean;
}

export const Input = ({
  label,
  type,
  placeholder,
  name,
  register = null,
  required = false,
}: IFormInput) => {
  // const [value, setValue] = useState("");
  return (
    <Box>
      <Label>
        {label} {required && <Asterisk>*</Asterisk>}
      </Label>
      <Flex>
        <FormInput
          id={name}
          placeholder={placeholder}
          // value={value}
          type={type}
          {...(register &&
            register(name, {
              required: { value: required, message: "Campo requerido" },
              // onChange: (e: ChangeEvent<HTMLInputElement>) => {
              //   console.log(e, "event");

              //   // setValue(e.target.value);
              // },
            }))}
        />
        {false && <ErrorMessage>Error</ErrorMessage>}
      </Flex>
    </Box>
  );
};
