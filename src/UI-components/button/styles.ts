import styled from "styled-components";

export const ButtonForm = styled.button`
  background-color: #7c01ff;
  color: #ffffff;
  outline: none;
  border: 2px solid #7c01ff;
  cursor: pointer;
  display: flex;
  place-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  box-sizing: border-box;
  width: 75%;
  border-radius: 100px;

  gap: 8px;
  height: 48px;
  padding: 14.5px 24px;
  font-size: 16px;
  line-height: 19px;

  @media (min-width: 600px) {
    width: 45%;
  }
`;
