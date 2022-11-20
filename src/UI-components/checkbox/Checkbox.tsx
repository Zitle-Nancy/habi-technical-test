import { ChangeEvent, useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./styles";

export const Checkbox = ({ textLabel = "" }: { textLabel: string }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log(checked, "checked");

  return (
    <label>
      <CheckboxContainer>
        <HiddenCheckbox onChange={handleCheckboxChange} />
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
