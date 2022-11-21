import { ButtonForm } from "./styles";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  borderRadius?: string;
}

export const Button = ({
  text,
  type = "button",
  onClick,
  borderRadius,
}: IButton) => {
  return (
    <ButtonForm type={type} onClick={onClick} borderRadius={borderRadius}>
      {text}
    </ButtonForm>
  );
};
