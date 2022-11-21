import styled from "styled-components";

export const Content = styled.article`
  grid-area: content;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeroContent = styled(Flex)`
  margin: 1rem;
  max-width: 500px;

  @media (min-width: 900px) {
    margin-top: 40px;
    margin-left: 89px;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  flex-direction: column-reverse;

  background: linear-gradient(
    66.92deg,
    rgb(99, 1, 204) 35.98%,
    rgb(124, 1, 255) 65.3%,
    rgb(238, 222, 255) 118.76%
  );
  border-radius: 16px;

  height: fit-content;
  width: auto;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    max-height: 400px;
  }
`;

export const HeroImage = styled.img`
  width: auto;
  height: auto;

  @media (min-width: 900px) {
    width: 500px;
  }
`;
