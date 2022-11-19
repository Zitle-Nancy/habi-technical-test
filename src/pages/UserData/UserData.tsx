import { useForm, useFormState } from "react-hook-form";

import { Input } from "../../UI-components/input";

export const UserData = () => {
  const { register, handleSubmit, setValue } = useForm();

  const formInputProps = {
    register,
    required: true,
  };

  return (
    <form>
      <Input
        name="userName"
        placeholder="Nombre completo"
        type="text"
        label="Nombre completo"
        handleOnChange={() => ""}
        {...formInputProps}
      />
      <button type="submit">next</button>
    </form>
  );
};
