import { ButtonForm } from "./styles";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  borderRadius?: string;
  width?: string;
  color?: string;
  background?: string;
}

export const Button = ({
  text,
  type = "button",
  onClick,
  borderRadius,
  width,
  color,
  background,
}: IButton) => {
  const styles = {
    borderRadius,
    width,
    color,
    background,
  };
  return (
    <ButtonForm type={type} onClick={onClick} {...styles}>
      {text}
    </ButtonForm>
  );
};
