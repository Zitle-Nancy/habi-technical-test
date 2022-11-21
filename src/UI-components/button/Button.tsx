import { ButtonForm } from "./styles";

interface IButton {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ text, type = "button" }: IButton) => {
  return <ButtonForm type={type}>{text}</ButtonForm>;
};
