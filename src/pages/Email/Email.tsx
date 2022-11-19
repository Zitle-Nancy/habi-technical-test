import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";

import { Input } from "../../UI-components/input";

export const Email = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ email: string }>();
  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;

  const formInputProps = {
    register,
    required: true,
  };

  const onSubmit = ({ email }: { email: string }) => {
    setUserInformation({ ...userInformation, email });
    navigate("/address");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
