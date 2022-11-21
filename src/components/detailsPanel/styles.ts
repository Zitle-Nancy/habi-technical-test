import styled, { css } from "styled-components";

const EXTEND_DETAILS_PANEL = css`
  grid-area: detailsPanelExtended;
  width: 100%;
  padding: 2rem;
`;

export const DetailsPanel = styled.aside<{ isExtended?: boolean }>(
  (props) => `
  ${
    props.isExtended
      ? EXTEND_DETAILS_PANEL
      : `
  grid-area: detailsPanel;
  padding: 50px 28px 0 24px;
  width: 340px;`
  };
  
  background: #fcfcfc;

  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`
);
