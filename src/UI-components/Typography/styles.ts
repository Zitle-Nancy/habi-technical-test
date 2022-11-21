import styled from "styled-components";
import { ITypography } from "./Typography";

export const HabbiTypography = styled.p<ITypography>(
  (props) => `
  color: ${props.color ? props.color : "black"};
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: ${props.fontWeight ? props.fontWeight : "normal"};
  letter-spacing: normal;
  line-height: normal;
  margin: ${props.margin ? props.margin : "0"};
  display: ${props.display ? props.display : "inline"};

  @media (min-width: 600px) {
    font-size: ${props.fontSize};
  }
`
);
