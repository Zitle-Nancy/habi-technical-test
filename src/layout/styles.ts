import styled, { css } from "styled-components";
interface IContainer {
  hideLeftPanel: boolean;
  extendLeftPanel: boolean;
}

const HIDE_LEFT_PANEL = css`
  "header header header"
  "content content content"
  "footer footer footer";
`;

const SHOW_LEFT_PANEL = css`
  "header header leftPanel"
  "content content leftPanel"
  "footer footer leftPanel";
`;

export const Container = styled.main<IContainer>(
  (props) => `
  padding: 2rem 3.75rem;
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;

  height: 100vh;

  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";

  grid-template-columns: 1fr 5fr 2fr;
  grid-template-rows: 1fr 5fr 2fr;

  @media (min-width: 600px) {
    grid-template-areas: ${
      props.hideLeftPanel ? `${HIDE_LEFT_PANEL}` : `${SHOW_LEFT_PANEL}`
    };

    grid-template-columns: 1fr 6fr 4fr;
    grid-template-rows: 1fr 5fr 1fr;
  }
`
);

export const Footer = styled.footer`
  grid-area: footer;
`;
