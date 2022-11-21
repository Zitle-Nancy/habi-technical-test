import styled, { css } from "styled-components";

const sharedStyle = css`
  color: red;
  font-size: 14px;
`;

export const Asterisk = styled.span`
  ${sharedStyle}
`;

export const ErrorMessage = styled.span`
  ${sharedStyle}
`;

export const FormInput = styled.input`
  background: white;
  border-radius: 8px;
  border: 1px solid rgb(148, 148, 148);
  padding: 0.85rem;
  height: 100%;
  outline: none;
  font-size: 1rem;
`;

export const Box = styled.div`
  width: 100%;
  margin-bottom: 34px;
  margin-right: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
