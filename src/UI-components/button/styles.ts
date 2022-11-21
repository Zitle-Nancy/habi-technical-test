import styled from "styled-components";

interface IButtonFormStyles {
  borderRadius?: string;
  width?: string;
  color?: string;
  background?: string;
}

export const ButtonForm = styled.button<IButtonFormStyles>(
  (props) => `
  background-color: ${props.background ? props.background : "#7c01ff"} ;
  color: ${props.color ? props.color : "#ffffff"} ;
  outline: none;
  border: 2px solid #7c01ff;
  cursor: pointer;
  display: flex;
  place-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  box-sizing: border-box;
  width: ${props.width ? props.width : "100%"};
  border-radius: ${props.borderRadius ? props.borderRadius : "100px"};

  gap: 8px;
  height: 48px;
  padding: 14.5px 24px;
  font-size: 16px;
  line-height: 19px;

  @media (min-width: 900px) {
    width: ${props.width ? props.width : "45%"};
  }
`
);
