import styled from "styled-components";

export const LeftPanel = styled.aside`
  grid-area: leftPanel;

  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;
