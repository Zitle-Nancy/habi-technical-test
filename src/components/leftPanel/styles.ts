import styled from "styled-components";

export const LeftPanel = styled.aside`
  grid-area: leftPanel;

  padding: 80px 28px 0px 24px;
  display: block;
  grid-column: 10 / span 2;
  width: 340px;
  height: 100vh;
  background: #fcfcfc;
  position: fixed;
  top: 0px;
  right: 0px;

  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;
