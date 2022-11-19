import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";

import { Input } from "../../UI-components/input";

export const UserData = () => {
  const navigate = useNavigate();
  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;

  console.log(
    userInformation,
    "setUserInformation ->",
    setUserInformation,
    "userInformation en user data"
  );

  const { register, handleSubmit } = useForm<{ userName: string }>();

  const formInputProps = {
    register,
    required: true,
  };

  const onSubmit = ({ userName }: { userName: string }) => {
    setUserInformation({ ...userInformation, name: userName });
    navigate("/email");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
