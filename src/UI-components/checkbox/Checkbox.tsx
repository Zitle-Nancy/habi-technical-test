import { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./styles";

interface ICheckbox {
  name: string;
  textLabel: string;
  register?: UseFormRegister<any> | null;
  required?: boolean;
  registerName: string;
}
export const Checkbox = ({
  textLabel = "",
  register,
  registerName,
  name,
}: ICheckbox) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label>
      <CheckboxContainer>
        <HiddenCheckbox
          name={name}
          value={`${checked}`}
          {...(register &&
            register(registerName, {
              onChange: handleCheckboxChange,
            }))}
        />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <span style={{ marginLeft: 8 }}>{textLabel}</span>
    </label>
  );
};
