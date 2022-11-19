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
  padding: 0.75rem;
  height: 100%;
  outline: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgb(37, 33, 41);
`;

export const Box = styled.div`
  width: 100%;
  margin-bottom: 34px;
  padding-top: 20px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
