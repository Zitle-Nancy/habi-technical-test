import { useForm, useFormState } from "react-hook-form";

import { Input } from "../../UI-components/input";

export const Address = () => {
  const { register, handleSubmit, setValue } = useForm();

  const formInputProps = {
    register,
    required: true,
  };

  return (
    <form>
      <Input
        name="address"
        placeholder="Escribe tu dirección"
        type="text"
        label="Dirección"
        handleOnChange={() => ""}
        {...formInputProps}
      />
      <button type="submit">next</button>
    </form>
  );
};
