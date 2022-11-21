import styled from "styled-components";

export const Form = styled.form<{ width?: boolean }>(
  (props) => `
  margin: "1rem 5rem";

  width: ${props.width ? "65%" : "100%"}
`
);

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
