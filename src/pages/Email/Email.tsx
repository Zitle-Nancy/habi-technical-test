import { useForm, useFormState } from "react-hook-form";

import { Input } from "../../UI-components/input";

export const Email = () => {
  const { register, handleSubmit, setValue } = useForm();

  const formInputProps = {
    register,
    required: true,
  };

  return (
    <form>
      <Input
        name="email"
        placeholder="Escribe tu correo electrónico"
        type="text"
        label="Correo electrónico"
        handleOnChange={() => ""}
        {...formInputProps}
      />
      <button type="submit">next</button>
    </form>
  );
};
