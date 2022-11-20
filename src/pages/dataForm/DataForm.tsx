import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { IUserInfoContext } from "../../layout/types";
import { Context } from "../../layout/useLayoutContext";
import { Input } from "../../UI-components/input";
import { INPUT_VALUES } from "./constants";

export const DataForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { register, handleSubmit, reset } = useForm();

  const { userInformation, setUserInformation } = useContext(
    Context
  ) as IUserInfoContext;

  const formInputProps = {
    register,
    required: true,
  };

  const onSubmit = (data: any) => {
    setUserInformation({
      ...userInformation,
      [INPUT_VALUES[pathname].name]: data[INPUT_VALUES[pathname].name],
    });
    navigate(INPUT_VALUES[pathname].nextPath);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name={INPUT_VALUES[pathname].name}
        placeholder={INPUT_VALUES[pathname].placeholder}
        type="text"
        label={INPUT_VALUES[pathname].label}
        {...formInputProps}
      />
      <button type="submit">next</button>
    </form>
  );
};
