import styled, { css } from "styled-components";

const EXTEND_LEFT_PANEL = css`
  grid-area: leftPanelExtended;
  width: 100%;
  padding: 2rem;
`;

export const LeftPanel = styled.aside<{ isExtended?: boolean }>(
  (props) => `
  ${
    props.isExtended
      ? EXTEND_LEFT_PANEL
      : `
  grid-area: leftPanel;
  padding: 80px 28px 0 24px;
  width: 340px;`
  };
  
  background: #fcfcfc;

  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`
);
