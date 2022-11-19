import { Box, FormInput, Label } from "./styles";

export const Input = ({
  label,
  type,
  value,
  handleOnChange,
}: {
  label: string;
  type: string;
  value: string;
  handleOnChange: () => {};
}) => {
  return (
    <Box>
      <Label>{label}</Label>
      <FormInput type={type} onChange={handleOnChange} />
    </Box>
  );
};
