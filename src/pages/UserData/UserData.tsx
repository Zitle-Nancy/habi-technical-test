import { Input } from "../../UI-components/input";

export const UserData = () => {
  return (
    <form>
      <Input
        type="text"
        value=""
        label="Nombre completo"
        handleOnChange={() => ""}
      ></Input>
    </form>
  );
};
