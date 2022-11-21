import styled, { css } from "styled-components";
interface IContainer {
  hideDetailsPanel: boolean;
  extendDetailsPanel: boolean;
}

const HIDE_DETAILS_PANEL = css`
  "header header header"
  "content content content"
  "footer footer footer";
`;

const SHOW_DETAILS_PANEL = css`
  "header header detailsPanel"
  "content content detailsPanel"
  "footer footer footer";
`;

export const Container = styled.main<IContainer>(
  (props) => `
  padding: 2rem;
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;

  height: 100vh;

  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";

  grid-template-columns: 1fr 5fr 2fr;
  grid-template-rows: 1fr 5fr .5fr;

  @media (min-width: 900px) {
    padding: 2rem 3.75rem;
    grid-template-areas: ${
      props.hideDetailsPanel ? `${HIDE_DETAILS_PANEL}` : `${SHOW_DETAILS_PANEL}`
    };

    grid-template-columns: 1fr 6fr 4fr;
    grid-template-rows: 1fr 7fr .5fr;
  }
`
);

export const Footer = styled.footer`
  grid-area: footer;

  padding-bottom: 1rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (min-width: 900px) {
    padding-bottom: 0;
    margin-top: 0;
  }
`;
