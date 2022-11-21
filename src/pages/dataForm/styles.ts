import styled from "styled-components";

export const Form = styled.form<{ width?: boolean }>(
  (props) => `
  margin: 0;

  width: 100%;

  @media (min-width: 900px) {
    margin: 1rem 5rem;
    width: ${props.width ? "65%" : "85%"}
  }
`
);

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
