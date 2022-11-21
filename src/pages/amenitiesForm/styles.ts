import styled from "styled-components";

export const FormContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Form = styled.form`
  margin: 0;

  width: 100%;
`;

export const Flex = styled.div`
  display: flex;

  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;

  margin-top: 2rem;
`;
