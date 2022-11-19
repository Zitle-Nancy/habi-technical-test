import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";

import { Input } from "../../UI-components/input";

export const UserData = () => {
  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;
  console.log(
    userInformation,
    "setUserInformation ->",
    setUserInformation,
    "userInformation en user data"
  );
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
