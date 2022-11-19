import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-gap: 10px;

  height: 100vh;

  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";

  grid-template-columns: 1fr 5fr 2fr;
  grid-template-rows: 1fr 5fr 2fr;

  @media (min-width: 600px) {
    grid-template-areas:
      "header header leftPanel"
      "content content leftPanel"
      "footer footer leftPanel";

    grid-template-columns: 1fr 6fr 4fr;
    grid-template-rows: 1fr 5fr 1fr;
  }
`;

export const LeftPanel = styled.aside`
  grid-area: leftPanel;

  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;
export const Footer = styled.footer`
  grid-area: footer;
`;
