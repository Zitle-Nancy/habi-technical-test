import { Button } from "./../button/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  position: absolute;
  margin: 1rem;
  right: 0;
`;

export const ContainerModal = styled.div`
  display: block;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  color: #6301cc;
`;
