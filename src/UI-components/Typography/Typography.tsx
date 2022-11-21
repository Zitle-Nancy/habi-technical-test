import { ReactNode } from "react";
import { HabbiTypography } from "./styles";

export interface ITypography {
  fontSize?: string;
  color?: string;
  children: ReactNode;
  margin?: string;
  display?: string;
  fontWeight?: string;
}

export const Typography = ({
  fontSize = "24px",
  children,
  color,
  margin,
  display,
  fontWeight,
}: ITypography) => {
  return (
    <HabbiTypography
      margin={margin}
      display={display}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
    >
      {children}
    </HabbiTypography>
  );
};
